const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

// Use EJS
app.set("view engine", "ejs");
app.use(expressLayouts);

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
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "ContactPage"
  });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product ID : ${req.params.id} <br/> Category ID : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404 NOT FOUND</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
