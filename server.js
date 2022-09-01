const app = require('./app')
require('dotenv').config()
const mongoose = require('mongoose')
const port = 8000

mongoose.connect(process.env.MONGO_URI).then((con) => {
   console.log('DB connected')
})

app.listen(port, () => console.log(`listening to port ${port} `))
