const express = require('express');
const app = express();
const prospectRoutes = express.Router();

let Prospect = require('../models/prospect');

//define 'get' route
prospectRoutes.route('/').get(function(req, res){
    Prospect.find(function(err, prospects){
        if(err){
            console.log(err)
        }else{
            res.json(prospects);
        }
    });
});

module.exports = prospectRoutes;
