const express = require('express')
const app = express()
var morgan = require('morgan')
const port = 3000
const bodyParser = require('body-parser')
var user = require('./api/user/index')

if(process.env.NODE_ENV !== 'test'){
    app.use(morgan('dev'));
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', user)

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}!`)
// })

module.exports = app;