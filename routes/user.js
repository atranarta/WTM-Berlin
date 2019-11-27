const express = require('express');
const router = express.Router();

const UserService = require('../services/user-service');
const EventService = require('../services/event-service');

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
  res.send(user);
});

router.delete('/:id', async (req, res) => {
  const user = await UserService.del(req.params.id)
  res.send(user);
});

router.post(':id/events', async (req, res) => {
  const user = await UserService.find(req.params.id);
  const event = await EventService.find(req.body.event);
  // attend заміити на щось інше
  // user.attend(event);
  res.send(user);
})

module.exports = router;