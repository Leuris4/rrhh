const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');


router.get('/employees',function(req,res,next){
    Employee.find({}).then(function(e){
        res.send(e);
    }).catch(next);
});


router.post('/employees',function(req,res,next){
    Employee.create(req.body).then(function(e){
        res.send(e);
    }).catch(next);
});

router.put('/employees/:id',function(req,res,next){
    Employee.findOneAndUpdate({_id: req.params.id},req.body).then(function(e){
        Employee.findOne({_id: req.params.id}).then(function(e){
            res.send(e);
        });
    });
});

router.delete('/employees/:id',function(req,res,next){
    Employee.findOneAndDelete({_id: req.params.id}).then(function(e){
        res.send(e);
    });
});

module.exports = router;