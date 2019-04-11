const express = require('express');
const app = express();
const teamRoutes = express.Router();

let Team = require('../models/team');

//define 'get' route

teamRoutes.route('/').get(function(req,res){
    Team.find(function(err, teams){
        if(err){
            console.log(err)
        }else{
            res.json(teams);
        }
    });
});

module.exports = teamRoutes;