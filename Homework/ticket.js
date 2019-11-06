module.exports = class Ticket {
  constructor(eventTitle, price, userName, userAge) {
    this.eventTitle = eventTitle;
    this.price = price;
    this.userName = userName;
    this.userAge = userAge;
  }
}