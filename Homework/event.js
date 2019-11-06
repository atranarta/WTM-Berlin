const Ticket = require('./ticket.js');

module.exports = class Event {
  constructor(title, priceAdult, priceReduced) {
    this.title = title;
    this.priceAdult = priceAdult;
    this.priceReduced = priceReduced;
  }
  
  createTicket(user) {
    let price = user.age < 12 ? this.priceReduced : this.priceAdult;

    return new Ticket(this.title, price, user.name, user.age);
  }
}