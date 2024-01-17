const express = require('express');
const router = express.Router();
const {getAllTasks} = require('../Controllers/tasks')

router.route('/').get(getAllTasks)

module.exports = router;