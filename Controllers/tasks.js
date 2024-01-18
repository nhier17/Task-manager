const Task = require('../models/task')

const getAllTasks = async (req,res) => {
    try {
const tasks = await Task.find({})
res.status(200).json({ tasks })
    } catch (error) {
     res.status(500).json({msg: error})
    }
res.send('all items on file')
};
const createNewTask = async (req,res) => {
   try {
     const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg: error})
    }

};
const getTask = async (req,res) => {
    try {
const {id:taskID} = req.params;
const singleTask = await Task.findOne({_id: taskID})
if (! singleTask) {
  return res.status(404).json({msg: `no task with id ${taskID}`}) 
}
res.status(200).json({singleTask});
    } catch (error) {
        res.status(500).json({msg: error})
    }

 };
const updateTask = async (req,res) => {
try {
const {id:taskID} = req.params
const task = await Task.findOneAndUpdate({_id: taskID},req.body,{
    new: true, runValidators: true
})

if (!task) {
    return res.status(404).json({msg: `no task with id ${taskID}`}) 
   }
   res.status(200).json({id: taskID, data: req.body})
} catch (error) {
    res.status(500).json({msg: error})  
}
    res.send('update task')
};
const deleteTask = async (req,res) => {
    try {
const {id:taskID} = req.params;
const task = await Task.findOneAndDelete({_id: taskID})
if (!task) {
   return res.status(404).json({msg: `no task with id ${taskID}`}) 
  }
  res.status(200).json({task})
    } catch (error) {
    res.status(500).json({msg: error})
    }
res.send('delete task')
};

module.exports = {
 getAllTasks,
 createNewTask,
 getTask,
updateTask,
deleteTask,

};