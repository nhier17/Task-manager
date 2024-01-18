require('./db/connect')
const express = require('express');
const app = express();
const tasks = require('./Routes/Tasks')

// middleware
app.use(express.json());


// routes
app.get('/hello', (req,res) => {
    res.send('Homepage')
});
app.use('/api/v1/tasks',tasks);

const port = 3000;
app.listen(port,console.log(`server is listening on port ${port}...`)
);