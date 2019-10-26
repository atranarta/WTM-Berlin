const Ticket = require('./ticket.js');

module.exports = class Event {
  constructor(title, priceAdult, priceReduced) {
    this.title = title;
    this.priceAdult = priceAdult;
    this.priceReduced = priceReduced;
  }

  createTicket(person) {
    let price = person.age < 12 ? this.priceReduced : this.priceAdult;

    return new Ticket(person, this.title, price);
  }
}