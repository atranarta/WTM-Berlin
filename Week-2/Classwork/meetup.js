module.exports = class Meetaup {
  constructor(name) {
    this.name = name;
    this.attendees = []
  }
  printAttendeeNames() {
    this.attendees.forEach(printName)
  }
}