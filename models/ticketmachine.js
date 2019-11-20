const Chalk = require('chalk');
const Ticket = require('./ticket');

module.exports = class TicketMachine {
  constructor(id, tickets = []) {
    this.id = id;
    this.tickets = tickets;
  }

  buyTicket(event, user) {
    this.tickets.push(event.createTicket(user));
  }

  printAllTickets() {
    console.log('Tickets:');
    this.tickets.forEach((ticket) => console.log('for ' + Chalk.red(ticket.userName) + ': ' + Chalk.bgGreenBright.black(ticket.eventTitle) + Chalk.yellow(' EUR ') + Chalk.yellow(ticket.price)));
  }

  printTicketsForUser(user) {
    console.log('Tickets for ' + Chalk.red(user.name) + ':');
    this.tickets
      .filter((ticket) => ticket.userName == user.name)
      .forEach((ticket) => console.log(Chalk.blue(ticket.eventTitle) + ' EUR ' + ticket.price));
  }

  getAllTickets() {
    return this.tickets;
  }
  
  getTicketsForUser(user) {
    return this.tickets.filter((ticket) => ticket.userName == user.name);
  }

  static create({ id, tickets}) {
    return new TicketMachine(
      id,
      tickets.map(Ticket.create)
    );
  } 
  
};