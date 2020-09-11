const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating schema
const projectSchema = new Schema({

    name: String,
    description: String,    
    display_order: Number
    
    //task: String
});
const projects = mongoose.model('projects', projectSchema);

module.exports = projects;

