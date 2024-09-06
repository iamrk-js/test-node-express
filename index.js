const cl = console.log
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('./config/dev')
const app = express()
const PORT = process.env.PORT || 3000
const postsRoutes = require('./routes/posts')

// localhost:3000/posts

app.use(bodyParser.json())

app.use(
  cors({
    origin: ['http://127.0.0.1:5500', 'http://4200'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
)

// app.use((req,res,next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*"),
//     res.setHeader("Access-Control-Allow-Header", "Content-type, Origin, Authorization"), // token
//     res.setHeader("Access-Control-Allow-Methods", " POST, PATCH, DELETE, OPTIONS")
//     next()
// })

// Routes
app.use(postsRoutes)

// Modules

const Posts = require('./models/posts')
mongoose
  .connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    cl(`Mongoose is coonected`)
  })
app.listen(PORT, () => {
  cl(`The server is running on port ${PORT}`)
})
