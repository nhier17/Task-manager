const mongoose = require('mongoose')

const connectionString ='mongodb+srv://Abraham:password17@nodeexpressprojects.yf8ck2r.mongodb.net/'
mongoose
.connect(connectionString)
.then(() => console.log('connected to the db...'))
.catch((err) =>console.log(err))