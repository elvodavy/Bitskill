const express = require('express');
const User = require("../models/User");
const bcrypt = require("bcrypt");
const app = express();
const sessionConfig = require('../middleware/sessionConfig');
const session = require('express-session');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(session(sessionConfig));

const register = (req, res) => {
    User.findOne({ email: req.body.email })
      .then(existingUser => {
        if (existingUser) {
          return res.status(400).json({ error: 'User with that email already exists' });
        }
  
        bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
          if (err) {
            res.status(500).json({ error: err });
          } else {
            let user = new User({
              email: req.body.email,
              password: hashedPass,
            });
            user.save()
              .then(() => {
                res.status(201).send('User added Successfully');
              })
              .catch((error) => {
                res.status(500).json({ error: error });
              });
          }
        });
      })
      .catch(error => {
        res.status(500).json({ error: error });
      });
  };
  
  

  const login = (req, res) =>{
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({ $or: [{email: email}, {password: password}] }).then(
        (user) =>{
            if(user){
                bcrypt.compare(password, user.password, function (err, result) {
                    if(err){
                        res.json({
                            error: err,
                        });
                    }
                    if(result){
                        const token = jwt.sign({email: user.email}, 'mysecretkey');
                        res.json({message: 'Logged In', token: token}); 
                    }
                    else{
                        res.send("Wrong email/Password combination!");
                    }
                });
            }
            else{
                res.send('User does not exist!');
            }
        }
    );
};

module.exports = { register, login};