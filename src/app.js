const express = require("express");
const path = require("path");
const app = express();
const { getPost } = require("../public/js/app");

app.use(express.static(path.join(__dirname, "../public")));

//  Set the handlebars...
app.set("view engine", "hbs");

// Set the partaials

app.get("/handlebars", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Nischay Jain",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    name: "nischay jain",
    age: 22,
    designation: "Software Engineer",
  });
});

app.get("/products", (req, res) => {
  console.log(req.query);
});

app.get("/wether", (req, res) => {
  if (!req.query.address) {
    return res.send({ message: "address must required" });
  }
  return res.send({ forecast: "it is snowing", location: "Jaipur India", address: req.query.address });
});

app.get("/post", (req, res) => {
  const { id } = req.query;
  if (!id) {
    return res.send({ message: "id is not present" });
  }
  getPost(id, (error, response) => {
    if (error) {
      return res.send({ message: error });
    }
    return res.send({ Data: response });
  });
});

app.post("/upload", (req, res) => {});

app.listen(8984, () => {
  console.log("Server is listing on port 8984");
});
