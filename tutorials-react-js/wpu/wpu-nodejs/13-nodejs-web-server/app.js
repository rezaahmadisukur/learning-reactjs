const http = require("http");
const fs = require("fs");

const renderHTML = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("Error: file not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html"
    });

    const url = req.url;
    /** Menggunakan Switch Case */
    switch (url) {
      case "/about":
        renderHTML("./about.html", res);
        break;
      case "/contact":
        renderHTML("./contact.html", res);
        break;
      default:
        renderHTML("./index.html", res);
    }

    /** Menggunakan If Else */
    // if (url === "/about") {
    //   renderHTML("./about.html", res);
    // } else if (url === "/contact") {
    //   renderHTML("./contact.html", res);
    // } else {
    //   renderHTML("./index.html", res);
    // }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000..");
  });
