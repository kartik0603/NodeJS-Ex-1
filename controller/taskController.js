const Task =require("../models/task.schema");


exports.createTask = async (req, res) => {
    const { taskName, description } = req.body;
  
    try {
      const task = new Task({ taskName, description });
      const savedTask = await task.save();
      res.status(201).json(savedTask);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  exports.getTasks = async (req, res) => {
    try {
      const tasks = await Task.find();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  exports.getTaskById = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
  
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  exports.updateTask = async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
  
      if (updatedTask) {
        res.json(updatedTask);
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  exports.deleteTask = async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
  
      if (deletedTask) {
        res.json({ message: 'Task deleted' });
      } else {
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };