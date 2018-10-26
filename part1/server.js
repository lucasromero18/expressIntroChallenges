var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/Hello', (req, res)=> {
  res.send("hello!");
});

app.post('/create/:id/:name', (req, res)=>{
  res.json({
    id: req.params.id,
    name: req.params.name
  });
});

app.get("/", (req, res)=> {
  res.send(/.part1/.index.html)
})

app.get("/verify/:age", (req, res)=>{
  let age = req.params.age
  if(age > 13){
    res.sendStatus(200)
  }else{
    res.sendStatus(403)
  }
})

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
