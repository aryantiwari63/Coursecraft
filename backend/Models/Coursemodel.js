const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const lessonSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true }, 
    duration: { type: Number, required: true } 
  });
  

const moduleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    lessons: [lessonSchema] 
  });
                                           
const courseschema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    duration: Number,
    enrollements: Number,
    modules: [moduleSchema],

})

module.exports = mongoose.model('course',courseschema);