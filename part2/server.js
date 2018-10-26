var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
let fs = require("fs")

//one

app.post("/create/:name/:age", (req, res) =>{

  let storage = fs.readFileSync(__dirname + "/storage.json", "utf8")
    let dataArr = JSON.parse(storage);
    let obj = ({
    name: req.params.name,
    age: req.params.age
  });
  dataArr.push(obj);
  fs.writeFileSync(__dirname + '/storage.json', JSON.stringify(dataArr));
  res.send("done")

});

//two

app.get("/", (req, res) => {
  res.send(fs.readFileSync("./storage.json", 'utf8'))
})

//three

app.get("/:name", (req, res) =>{
  let name = req.params.name
  let storage = fs.readFileSync(__dirname + "/storage.json", "utf8")
  let dataArr = JSON.parse(storage);
  let results = dataArr.filter(user => user.name == name);
  res.json(results);
})






app.get('/yourroute', function(req, res) {
  res.send("stuff");
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
