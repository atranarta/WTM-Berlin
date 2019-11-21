const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  title: String,
  price: Number,
  userName: String,
  userAge: Number
});

const TicketModel = mongoose.model('Ticket', TicketSchema);

module.exports = TicketModel;


// module.exports = class Ticket {
//   constructor(eventTitle, price, userName, userAge) {
//     this.eventTitle = eventTitle;
//     this.price = price;
//     this.userName = userName;
//     this.userAge = userAge;
//   }

//   static create({ eventTitle, price, userName, userAge }) {
//     return new Ticket(eventTitle, price, userName, userAge);
//   } 
// };