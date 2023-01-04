# Simple Hello world api
## How to use

- Clone the project
- change directory and npm install
- Add the following code in index.js file

```sh
const express = require('express')                // Importing express
const app = express()                             // Creating app isntance of express 

app.get('/', function (req, res) {                // Using GET method
  res.send('Hello World')
})

app.post('/',function(req,res){                   // Using Post method
  res.send('post called !!!!')
})

app.listen(3000)                                  // Server Listening on Port 3000
```
