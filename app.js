require('dotenv').config()
//express
const express = require('express');
const app = express();
//security packages
const cors = require('cors')
const helmet = require('helmet')
//db
const connectDB = require('./db/connect')
//routes
const tasks = require('./Routes/Tasks')

//error handlers
const notFound = require('./middleware/notfound')
const errorHandler = require('./middleware/error')

// middleware
app.use(express.static('./Public'))
app.use(express.json());
app.use(cors());
app.use(helmet());

// routes
app.use('/api/v1/tasks',tasks);
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000;
const start = async () => {
    try {
await connectDB(process.env.MONGO_URI);
app.listen(port,console.log(`server is listening on port ${port}...`)
);
    } catch (error) {
console.log(error);
    }
};
start();

