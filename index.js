const express = require('express')
const app = express()
const routes = require('./routes/api')
const path = require('path')

app.listen(8080, ()=>{
    console.log('Server online');
})

app.use('/api', routes)

app.use('/', express.static(path.join(__dirname, 'public')))

