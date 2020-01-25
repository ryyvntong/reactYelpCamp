const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json())
app.post('/campgrounds', (req, res) => {
  let data=req.body
  res.send(data)
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);