const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../db/models');
require('dotenv').config();

const regRouter = express.Router();

regRouter.post('/signup', async (req, res) => {
  const { name, email, password, photo, age, city, address, about, number, points } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashPass = await bcrypt.hash(password, 7);
    const user = await User.create({
      name,
      email,
      password: hashPass,
      photo,
      age,
      city,
      address,
      about,
      number,
      points,
    });

    const token = jwt.sign({ email: user.email, id: user.id }, process.env.SECRETKEY, {
      expiresIn: '30d',
    });
    res.status(201).json({ user, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

regRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    const matchPass = await bcrypt.compare(password, existingUser.password);
    if (matchPass) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser.id },
      process.env.SECRETKEY,
      {
        expiresIn: '30d',
      },
    );
    res.status(201).json({ user: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = regRouter;
