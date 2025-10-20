const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

/** Connection to DB */
require("./utils/db");
const Contact = require("./model/contact");

const app = express();
const port = 3000;

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
  // Contact.find().then((result) => {
  //   res.send(result);
  // });

  const contacts = await Contact.find();

  res.render("contact", {
    layout: "layouts/main-layout",
    title: "Contactpage",
    contacts,
    msg: req.flash("msg")
  });
});

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
