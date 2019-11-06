module.exports = class Meetup {
  constructor(name, attendees = []) {
    this.name = name;
    this.attendees = attendees;
  }
  printAttendeeNames() {
    this.attendees.forEach(printName);
  }

  static create({name, attendees}) {
    return new Meetup(name, attendees);
  }
}

const printName = person => console.log(person.name);




// -----Example-----

// module.exports = class Meetup {
//   constructor(name, location, attendees = [], id) {
//       this.name = name
//       this.location = location
//       this.attendees = attendees
//       this.id = id
//   }

//   report() {
//       console.log(this.name, 'meetup is held at', this.location, 'and number of attendees are', this.attendees.length)
//   }

//   static create({ name, location, attendees, id }) {
//       return new Meetup(name, location, attendees, id)
//   }
// }


