const Chalk = require('chalk');

module.exports = class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.tickets = [];
  }

  buy(ticket) {
    this.tickets.push(ticket);
  }

  printAllTickets() {
    console.log('Tickets bought by ' + Chalk.blue(this.name))
    this.tickets.forEach((ticket) => console.log('for ' + Chalk.red(ticket.person.name) + ': ' + Chalk.bgGreenBright.black(ticket.eventTitle) + ' EUR ' + ticket.price));
  }

  printTicketsForPerson(person) {
    console.log('Tickets bought by ' + Chalk.blue(this.name) + ' for ' + Chalk.red(person.name) + ':');
    this.tickets
      .filter((ticket) => ticket.person == person)
      .forEach((ticket) => console.log(ticket.eventTitle + ' EUR ' + ticket.price));
  }
}