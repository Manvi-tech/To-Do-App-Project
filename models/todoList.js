
const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task:{
         type:String,
         required:true
    },
    duedate:{
        type:String,
        required:true
    },
    category:{
          type:String,
         required:true
    }
});

const todo = mongoose.model('todo',todoSchema);
module.exports = todo;