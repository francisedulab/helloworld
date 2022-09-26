const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/',function(req,res){
  res.send('post called !!!!')
})

app.listen(3000)