const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('hello twitter!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})