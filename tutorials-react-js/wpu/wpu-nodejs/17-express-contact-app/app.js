const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const { loadContact, findContact } = require("./utils/contacts");

const app = express();
const port = 3000;

// Use EJS
app.set("view engine", "ejs");
// Third-party Middleware
app.use(expressLayouts);

// Built-in Middleware
app.use(express.static("public"));

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
    contacts
  });
});

app.get("/contact/:nama", (req, res) => {
  const contact = findContact(req.params.nama);
  res.render("detail", {
    title: "Detail Contact Page",
    layout: "layouts/main-layout",
    contact
  });
});

app.use((req, res) => {
  res.status(404);
  res.send("<h1>404 NOT FOUND</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
