const express = require('express');
const router = express.Router();

const EventService = require('../services/event-service');

router.get('/all', async (req, res) => {
  const events = await EventService.findAll();
  res.send(events);
  // res.render('event', { events });  
});

router.get('/:id', async (req, res) => {
  const event = await EventService.find(req.params.id);
  res.render(event);
});

router.post('/', async (req, res) => {
  const event = await EventService.add(req.body);
  res.send(event);
});

router.delete('/:id', async (req, res) => {
  const event = await EventService.del(req.params.id);
  res.send(event);
});

module.exports = router;