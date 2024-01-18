
const express = require('express');
const app = express();
const tasks = require('./Routes/Tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/notfound')
const errorHandler = require('./middleware/error')

// middleware
app.use(express.static('./Public'))
app.use(express.json());

// routes
app.use('/api/v1/tasks',tasks);
app.use(notFound)
app.use(errorHandler)

const port = 3000;
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

