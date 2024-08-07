const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    task: String,
    status: Boolean,

})

const Task = mongoose.model('Task', TodoSchema)

module.exports = Task