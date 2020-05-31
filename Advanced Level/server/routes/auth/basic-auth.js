const express = require('express');
const router = express.Router();

// db
const { ObjectID } = require('mongodb');

// password authentication
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
  console.log('req.body:', req.body);
  const { email, password } = req.body;

  // encrypt password
  bcrypt.hash(password, 10, (err, encryptedPassword) => {
    console.log('encryptedPassword:', encryptedPassword);

    // dummy check
    // bcrypt
    //   .compare(password, encryptedPassword)
    //   .then((res) => console.log('isPasswordSame:', res));

    // Save in db
  });

  // create token
  console.log(
    'email, process.env.JWT_PRIVATE_KEY:',
    email,
    process.env.JWT_PRIVATE_KEY
  );
  const userId = new ObjectID();
  const token = jwt.sign({ userId }, process.env.JWT_PRIVATE_KEY);
  console.log('token:', token);

  // dummy check
  // const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  // console.log('decoded:', decoded);

  res.send({ token });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
});

router.post('/logout', (req, res) => {
  const userId = req.authUserId;

  //  I don't no what to do in server
  res.sendStatus(204);
});

module.exports = router;
