const express = require('express');
const bodyParser = require('body-parser')

const UserService = require('./services/user-service');
const EventService = require('./services/event-service');
const TicketMachineService = require('./services/ticket-machine-service');

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/user/all', async (req, res) => {
  const users = await UserService.findAll();
  res.render('user', { users });  
});

app.get('/user/:id', async (req, res) => {
  const user = await UserService.find(req.params.id);
  res.send(user);
});

app.post('/user', async (req, res) => {
  const user = await UserService.add(req.body)
  res.send(user)
});

app.delete('/user/:id', async (req, res) => {
  const user = await UserService.del(req.params.id)
  res.send(user)
});

app.get('/event/all', async (req, res) => {
  const events = await EventService.findAll();
  res.render('event', { events });  
});

app.get('/event/:id', async (req, res) => {
  const event = await EventService.find(req.params.id);
  res.send(event);
});

app.post('/event', async (req, res) => {
  const event = await EventService.add(req.body);
  res.send(event);
});

app.delete('/event/:id', async (req, res) => {
  const event = await EventService.del(req.params.id);
  res.send(event);
});

app.post('/tm/create', async (req, res) => {
  const tm = await TicketMachineService.add(req.body);
  res.send(tm);
});

app.post('/tm/:id/buy', async (req, res) => {
  const tm = await TicketMachineService.find(req.params.id);
  const event = await EventService.find(req.body.event_id);
  const user = await UserService.find(req.body.user_id);

  tm.buyTicket(event, user);

  // TicketMachineService.save(tm); ???
  res.send(tm)
});

app.get('/tm/:id/tickets', async (req, res) => {
  const tm = await TicketMachineService.find(req.params.id);
  res.render('ticketmachine', {tickets: tm.getAllTickets()});  
});

app.get('/tm/:id/tickets-for/:user_id', async (req, res) => {
  const tm = await TicketMachineService.find(req.params.id);
  const user = await UserService.find(req.params.user_id);

  if (!user) {
    res.send(404, 'User not found');
  }

  res.render('ticketmachinePerUser', {tickets: tm.getTicketsForUser(user), userName: user.name});  
});


app.listen(3000, () => {
  console.log('Server listening');
})



// --------------------------------------------------------------

// const User = require('./models/user');
// const Event = require('./models/event');
// const TicketMachine = require('./models/ticketmachine');
// const UserService = require('./services/user-service');
// const EventService = require('./services/event-service');
// const TicketMachineService = require('./services/ticket-machine-service');

// async function main() {
//   const zoo = new Event('Berlin Zoological Garden', '15,50', '10,50');
//   const tierpark = new Event('Tierpark Berlin', '14,50', '9,50');

//   const tanya = new User('Tanya', 30);
//   const katyaJ = new User('Katya J', 8);

//   const ticketMachine = new TicketMachine();

//   ticketMachine.buyTicket(tierpark, tanya);
//   ticketMachine.buyTicket(zoo, tanya);
//   ticketMachine.buyTicket(zoo, katyaJ);
  
//   ticketMachine.printAllTickets();
//   console.log('=============');
//   ticketMachine.printTicketsForUser(tanya);
//   console.log('=============');

//   // await UserService.add(tanya);
//   // await UserService.add(katyaJ);

//   // await EventService.add(zoo);
//   // await EventService.add(tierpark);

//   // await TicketMachineService.add(ticketMachine);

//   const people = await UserService.findAll();
//   console.log(people[0].name);

//   const events = await EventService.findAll();
//   console.log(events);
//   console.log(events[1].title);

//   const loadedTicketMachine = await TicketMachineService.find(1);

//   loadedTicketMachine.printAllTickets();
//   loadedTicketMachine.printTicketsForUser(people[0]);

//   // await PersonService.del(1);
//   // await PersonService.del(2);

//   // await EventService.del(1);
//   // await EventService.del(2);

//   // await TicketMachineService.del(1);
// } 

// main();