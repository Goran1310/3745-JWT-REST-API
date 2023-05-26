var express = require('express');
var router = express.Router();

const users = [];
let id = 1;

// Render the home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Render the signup page
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

// Render the login page
router.get('/login', function(req, res, next) {
  res.render('login');
});

// Handle post request for login
router.post("/login", async (req, res, next) => {
  let { email, password } = req.body;
  let existingUser;
  try {
    existingUser = users.find(element => element.email == email);
  } catch {
    const error = new Error("Error! Something went wrong.");
    return next(error);
  }
  if (!existingUser || existingUser.password != password) {
    const error = Error("Wrong details please check at once");
    return next(error);
  }
  res.status(200).json({
    success: true,
    data: {
      userId: existingUser.id,
      email: existingUser.email,
    },
  });
});

// Handle post request for signup
router.post("/signup", async (req, res, next) => {
  const { email, password } = req.body;
  const newUser = {
    id,
    email,
    password,
  };
  users.push(newUser);
  id++;
  res.status(201).json({
    success: true,
    data: {
      userId: newUser.id,
      email: newUser.email,
    },
  });
});

module.exports = router;