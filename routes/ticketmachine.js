const express = require('express');
const router = express.Router();

const TicketMachineService = require('../services/ticket-machine-service');

router.post('/tm/create', async (req, res) => {
  const tm = await TicketMachineService.add(req.body);
  res.send(tm);
});

router.post('/tm/:id/buy', async (req, res) => {
  const tm = await TicketMachineService.find(req.params.id);
  const event = await EventService.find(req.body.event_id);
  const user = await UserService.find(req.body.user_id);

  tm.buyTicket(event, user);

  // TicketMachineService.save(tm); ???
  res.send(tm)
});

router.get('/tm/:id/tickets', async (req, res) => {
  const tm = await TicketMachineService.find(req.params.id);
  res.render('ticketmachine', {tickets: tm.getAllTickets()});  
});

router.get('/tm/:id/tickets-for/:user_id', async (req, res) => {
  const tm = await TicketMachineService.find(req.params.id);
  const user = await UserService.find(req.params.user_id);

  if (!user) {
    res.send(404, 'User not found');
  }

  res.render('ticketmachinePerUser', {tickets: tm.getTicketsForUser(user), userName: user.name});  
});

module.exports = router;