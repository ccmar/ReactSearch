const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/nytreact", {
  useMongoClient: true
});


const Schema = mongoose.Schema
  const ArticlesSchema = new Schema({
    title: String,
    date: { type: Date, default: Date.now},
    url: String
  });
const Article = mongoose.model("Article", ArticlesSchema);


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static("./build"));
app.use(cors())
app.get("/api/saved", (req, res) => {
  Article.find({}).then (function (articles, err){
    console.log(articles);
    if (err) console.log(err)
    res.json(articles)
  });
});

app.post("/api/saved", (req, res) => {
  Article.create(req.body).then (function(article, err){
    if (err) console.log(err);
    res.json(article);
  })
});
app.delete("/api/saved/:id", (req, res) => {
  Article.remove({ _id: req.params.id }).then (function(article, err){
    if (err) console.log(err);
    res.send('DELETE request to homepage');
  })
});
app.listen(process.env.PORT || 3001, () => console.log('Example app'))