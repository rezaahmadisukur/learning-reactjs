const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const { body, validationResult, check } = require("express-validator");
const methodOverride = require("method-override");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

/** Connection to DB */
require("./utils/db");
const Contact = require("./model/contact");

const app = express();
const port = 3000;

// Setup method override
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

/** Configuration Flash  */
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

// Homepage
app.get("/", (req, res) => {
  const mahasiswa = [
    {
      name: "Sandhika",
      email: "sandhika@yahoo.com"
    },
    {
      name: "Erik",
      email: "erik@yahoo.co.id"
    },
    {
      name: "Doddy Ferdiansyah",
      email: "doddy@gmail.com"
    }
  ];
  res.render("index", {
    layout: "layouts/main-layout",
    title: "Homepage",
    mahasiswa
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "Aboutpage"
  });
});

app.get("/contact", async (req, res) => {
  const contacts = await Contact.find();
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contactpage",
    contacts,
    msg: req.flash("msg")
  });
});

app.get("/contact/add", (req, res) => {
  res.render("add-contact", {
    layout: "layouts/main-layout",
    title: "Add Contact"
  });
});

/** Process Add Contact */
app.post(
  "/contact",
  [
    body("nama").custom(async (value) => {
      const duplicat = await Contact.findOne({ nama: value });
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
      res.render("add-contact", {
        title: "Form tambah contact",
        layout: "layouts/main-layout",
        errors: errors.array()
      });
    } else {
      Contact.insertMany(req.body, (error, result) => {
        // Send Flash Message
        req.flash("msg", "Data contact berhasil ditambahkan");
        res.redirect("/contact");
      });
    }
  }
);

// app.get("/contact/delete/:nama", async (req, res) => {
//   const contact = await Contact.findOne({ nama: req.params.nama });
//   if (!contact) {
//     res.status(404);
//     res.send("<h1>404</h1>");
//   } else {
//     Contact.deleteOne({ _id: contact._id }).then((result) => {
//       req.flash("msg", "Data contact berhasil dihapus");
//       res.redirect("/contact");
//     });
//   }
// });

/** Process Delete Contact */
app.delete("/contact", (req, res) => {
  Contact.deleteOne({ nama: req.body.nama }).then((result) => {
    req.flash("msg", "Data contact berhasil dihapus");
    res.redirect("/contact");
  });
});

/** Edit Page */
app.get("/contact/edit/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });
  res.render("edit-contact", {
    title: "Form edit contact",
    layout: "layouts/main-layout",
    contact: contact
  });
});

/** Process Update Contact */
app.put(
  "/contact",
  [
    body("nama").custom(async (value, { req }) => {
      const duplicat = await Contact.findOne({ nama: value });
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
      res.render("edit-contact", {
        title: "Form ubah contact",
        layout: "layouts/main-layout",
        errors: errors.array(),
        contact: req.body
      });
    } else {
      Contact.updateOne(
        { _id: req.body._id },
        {
          $set: {
            nama: req.body.nama,
            email: req.body.email,
            noHP: req.body.noHP
          }
        }
      ).then(() => {
        // Kirim kan flash message
        req.flash("msg", "Data contact berhasil ditambahkan");
        res.redirect("/contact");
      });
    }
  }
);

app.get("/contact/:nama", async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama });

  res.render("detail", {
    layout: "layouts/main-layout",
    title: "Detailpage",
    contact
  });
});

app.listen(port, () => {
  console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});
