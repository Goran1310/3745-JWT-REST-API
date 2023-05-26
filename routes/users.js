var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')
var db = require("../models");
var UserService = require("../services/UserService")
var userService = new UserService(db);

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // Get the token from the Authorization header
  const token = req.headers.authorization?.split(' ')[1];
  if(!token) {
    // Return an error response if the token is not provided
    res.status(200).json({success:false, message: "Error! Token was not provided."});
  }
  // Verify the token and get the decoded token data
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET );
  // Get all users from the database using the UserService
  const users = await userService.getAll();
  // Return a success response with the decoded token data and the list of users
  res.status(200).json({
    success:true,
    data:{
      userId:decodedToken.userId,
      email:decodedToken.email,
      users: users.map(user=>user.Email)
    }
  });  
});

module.exports = router;