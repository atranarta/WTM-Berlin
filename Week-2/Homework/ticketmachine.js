const Chalk = require('chalk');

module.exports = class TicketMachine {
  constructor() {
    this.tickets = [];
  }

  buyTicket(event, user) {
    this.tickets.push(event.createTicket(user));
  }

  printAllTickets() {
    console.log('Tickets:')
    this.tickets.forEach((ticket) => console.log('for ' + Chalk.red(ticket.userName) + ': ' + Chalk.bgGreenBright.black(ticket.eventTitle) + ' EUR ' + ticket.price));
  }

  printTicketsForUser(user) {
    console.log('Tickets for ' + Chalk.red(user.name) + ':');
    this.tickets
      .filter((ticket) => ticket.userName == user.name)
      .forEach((ticket) => console.log(ticket.eventTitle + ' EUR ' + ticket.price));
  }

  getAllTickets() {
    return this.tickets;
  }  
}