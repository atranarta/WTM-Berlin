const mongoose = require('mongoose');


const EventSchema = new mongoose.Schema({
  title: String,
  priceAdult: Number,
  priceReduced: Number
});

const EventModel = mongoose.model('Event', EventSchema);

module.exports = EventModel;



// const Ticket = require('./ticket');
// module.exports = class Event {
//   constructor(title, priceAdult, priceReduced, id) {
//     this.title = title;
//     this.priceAdult = priceAdult;
//     this.priceReduced = priceReduced;
//     this.id = id;
//   }
  
//   createTicket(user) {
//     let price = user.age < 12 ? this.priceReduced : this.priceAdult;

//     return new Ticket(this.title, price, user.name, user.age);
//   }

//   static create({ title, priceAdult, priceReduced, id }) {
//     return new Event(title, priceAdult, priceReduced, id);
//   }

// };