const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const User = require('../models/user');


//Employee Section
router.get('/employee',function(req,res,next){
    Employee.find({}).then(function(e){
        res.send(e);
    }).catch(next);
});


router.post('/employee',function(req,res,next){
    Employee.create(req.body).then(function(e){
        res.send(e);
    }).catch(next);
});

router.put('/employee/:id',function(req,res,next){
    Employee.findOneAndUpdate({_id: req.params.id},req.body).then(function(e){
        Employee.findOne({_id: req.params.id}).then(function(e){
            res.send(e);
        });
    });
}); 

router.delete('/employee/:id',function(req,res,next){
    Employee.findOneAndDelete({_id: req.params.id}).then(function(e){
        res.send(e);
    });
});


/**
 *  End Employee Section
 * 
 * 
 * User Section
 */

router.get('/user',function(req,res,next){
    User.find({}).then(function(e){
        res.send(e);
    }).catch(next);
});
router.get('/user/:user/:password',function(req,res,next){
    User.findOne({user: req.params.user,password: req.params.password }).then(function(e){
       if(e==null){
           e= []
       }
       res.send(e);
    }).catch();

});


router.post('/user',function(req,res,next){
    User.create(req.body).then(function(e){
        res.send(e);
    }).catch(next);
});

module.exports = router;