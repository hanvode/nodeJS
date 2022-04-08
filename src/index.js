const express = require('express')
const path = require('path')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./config/db')

//connect to DB
db.connect()

app.use(express.static(path.join(__dirname,'public')))
// hiển thị log thông báo quá trình tải nhận data = HTTP logger
// app.use(morgan('combined'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
// template engine
app.engine('hbs',engine({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources','views'))


// Route init
route(app)




app.listen(port, ()=> console.log(`App listening at http://localhost:${port}`))