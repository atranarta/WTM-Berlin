const express = require('express');
const router = express.Router();

const UserService = require('../services/user-service');

router.get('/all', async (req, res) => {
  const users = await UserService.findAll();
  res.render('user', { users });  
});

router.get('/:id', async (req, res) => {
  const user = await UserService.find(req.params.id);
  res.send(user);
});

router.post('/', async (req, res) => {
  const user = await UserService.add(req.body)
  res.send(user)
});

router.delete('/:id', async (req, res) => {
  const user = await UserService.del(req.params.id)
  res.send(user)
});

module.exports = router;