const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwtMiddleware = require('express-jwt')


const User = require('../models/User')
users.use(cors())


users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + ' Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  console.log("Hit post-login" + req.body.email);
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      console.log(user);
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          const payload = {
            _id: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
          }
          console.log(process.env.SECRET_KEY);
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            //expiresIn: 1440
          })
          console.log("TOKEN" + token);
          res.status(200).json(token);
        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/profile', (req, res) => {
  console.log("Profile Hit")
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  res.status(200).json(decoded)
  console.log(decoded);
/*   User.findOne({
    _id: decoded._id
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    }) */
})


users.get("/id", (req, res)=> {
res.send("HOLA");
});

users.get("/users", (req,res)=>{
  console.log("api users hit")
  console.log("USER" + User)
  User.find({}).then(
    (user) => {
      console.log("USER" + user)
      res.json(user);
    }
  ).catch(
    (err) => {
      res.json({error:err});
    }
  )
});

module.exports = users
