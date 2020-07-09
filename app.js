const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/contact', function (req, res) {
  res.send('Contact')
})
 
app.get('/user', function (req, res) {
    res.json({
        user : 
        [
            {
                name : 'Fabien',
                age : 33
            },
            {
                name : 'Helen',
                age : 32
            }
        ]
    })
  })

app.listen(3000)