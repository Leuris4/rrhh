const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const PayrollSchema = new Schema({
    employee_id: {
        type: String,
      
    },
    salary_brut: {
        type: Number,
    },
    salary_net: {
        type: Number,
    },
    afp: {
        type: Number,
    },
    ars: {
        type: Number,
    }
   
});


const Payroll = mongoose.model('payroll',PayrollSchema);

module.exports = Payroll;