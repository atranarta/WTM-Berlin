const mongoose = require('mongoose');

const TicketmachineSchema = new mongoose.Schema({
  tickets: Array
});

const TicketmachineModel = mongoose.model('Ticketmachine', TicketmachineSchema);

module.exports = TicketmachineModel;

// const Ticket = require('./ticket');

// module.exports = class TicketMachine {
//   constructor(id, tickets = []) {
//     this.id = id;
//     this.tickets = tickets;
//   }

//   buyTicket(event, user) {
//     this.tickets.push(event.createTicket(user));
//   }

//   printAllTickets() {
//     console.log('Tickets:');
//     this.tickets.forEach((ticket) => console.log('for ' + ticket.userName + ': ' + ticket.eventTitle + ' EUR ' + ticket.price));
//   }

//   printTicketsForUser(user) {
//     console.log('Tickets for ' + user.name + ':');
//     this.tickets
//       .filter((ticket) => ticket.userName == user.name)
//       .forEach((ticket) => console.log(ticket.eventTitle + ' EUR ' + ticket.price));
//   }

//   getAllTickets() {
//     return this.tickets;
//   }
  
//   getTicketsForUser(user) {
//     return this.tickets.filter((ticket) => ticket.userName == user.name);
//   }

//   static create({ id, tickets}) {
//     return new TicketMachine(
//       id,
//       tickets.map(Ticket.create)
//     );
//   } 
  
// };