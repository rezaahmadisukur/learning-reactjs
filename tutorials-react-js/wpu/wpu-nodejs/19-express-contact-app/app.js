const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { body, validationResult, check } = require("express-validator");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const {
  loadContact,
  findContact,
  addContact,
  cekDuplikat,
  deleteContact,
  updateContacts
} = require("./utils/contacts");

const app = express();
const port = 3000;

// Use EJS
app.set("view engine", "ejs");
// Third-party Middleware
app.use(expressLayouts);

// Built-in Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Konfigurasi flash
app.use(cookieParser("secret"));
app.use(
  session({
    cookie: { maxAge: 6000 },
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(flash());

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Sandhika Galih",
      email: "sandhikagalih@gmail.com"
    },
    {
      nama: "Erik",
      email: "erik@gmail.com"
    },
    {
      nama: "Doddy Ferdiansyah",
      email: "doddy@gmail.com"
    }
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    nama: "Sandhika Galih",
    title: "HomePage",
    mahasiswa
  });
});

app.get("/about", (req, res) => {
  res.render("about", { layout: "layouts/main-layout", title: "AboutPage" });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();
  res.render("contact", {
    title: "ContactPage",
    layout: "layouts/main-layout",
    contacts,
    msg: req.flash("msg")
  });
});

app.post(
  "/contact",
  [
    body("nama").custom((value) => {
      const duplicat = cekDuplikat(value);
      if (duplicat) {
        throw new Error("Nama contact sudah terdaftar");
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("noHP", "No Handphone tidak valid").isMobilePhone("id-ID")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("add-contact", {
        title: "Form tambah contact",
        layout: "layouts/main-layout",
        errors: errors.array()
      });
    } else {
      addContact(req.body);
      // Kirim kan flash message
      req.flash("msg", "Data contact berhasil ditambahkan");
      res.redirect("/contact");
    }
  }
);

app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    title: "Form add contact",
    layout: "layouts/main-layout"
  });
});

app.get("/contact/delete/:nama", (req, res) => {
  const contact = findContact(req.params.nama);

  // Jika contact tidak ada
  if (!contact) {
    res.status(404);
    res.send("<h1>404</h1>");
  } else {
    deleteContact(req.params.nama);
    req.flash("msg", "Data contact berhasil dihapus");
    res.redirect("/contact");
  }
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    title: "Detail Contact Page",
    layout: "layouts/main-layout",
    contact
  });
});

app.post(
  "/contact/update",
  [
    body("nama").custom((value, { req }) => {
      const duplicat = cekDuplikat(value);
      if (value !== req.body.oldNama && duplicat) {
        throw new Error("Nama contact sudah terdaftar");
      }
      return true;
    }),
    check("email", "Email tidak valid!").isEmail(),
    check("noHP", "No Handphone tidak valid").isMobilePhone("id-ID")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render("edit-contact", {
        title: "Form ubah contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
        contact: req.body
      });
    } else {
      updateContacts(req.body);
      // Kirim kan flash message
      req.flash("msg", "Data contact berhasil ditambahkan");
      res.redirect("/contact");
    }
  }
);

app.get("/contact/edit/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("edit-contact", {
    title: "Form edit contact",
    layout: "layouts/main-layout",
    contact: contact
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404 NOT FOUND</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
