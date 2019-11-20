const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/user');
const eventRouter = require('./routes/event');
const ticketmachineRouter = require('./routes/ticketmachine');

// require('./mongo-connection')

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.json());

app.use('/user', userRouter)
app.use('/event', eventRouter)
app.use('/ticketmachine', ticketmachineRouter)

app.get('/', (req, res) => {
  res.render('index');
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