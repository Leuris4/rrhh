const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required']
    },
    lastname: {
        type: String,
    },
    department: {
        type: String,
    },
    position: {
        type: String,
    },
    hired_date: {
        type: Date,
    },
    vacation: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    },
   
});


const Employee = mongoose.model('employee',EmployeeSchema);

module.exports = Employee;