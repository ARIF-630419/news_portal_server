const express = require("express");
const app = express();
const port = process.env.Port || 5000;
const cors = require("cors");
const categories = require("./data/Categories.json");
const news = require("./data/news.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("news portal server is running");
})
app.get("/categories", (req, res) => {
  res.send(categories);
})
app.get("/news", (req, res) => {
  res.send(news);
})
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectednews = news.find(n => n._id === id);
  res.send(selectednews);
})
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id == 0) {
    res.send(news);
  }
  else {
    const categoryNew = news.filter(n => n.category_id === id);
    res.send(categoryNew);
  }
})
app.listen(port, () => {
  console.log("news portal server is running", port);
}
)