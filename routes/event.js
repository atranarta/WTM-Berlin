const express = require('express');
const router = express.Router();

const EventService = require('../services/event-service');

router.get('/event/all', async (req, res) => {
  const events = await EventService.findAll();
  res.render('event', { events });  
});

router.get('/event/:id', async (req, res) => {
  const event = await EventService.find(req.params.id);
  res.send(event);
});

router.post('/event', async (req, res) => {
  const event = await EventService.add(req.body);
  res.send(event);
});

router.delete('/event/:id', async (req, res) => {
  const event = await EventService.del(req.params.id);
  res.send(event);
});

module.exports = router;