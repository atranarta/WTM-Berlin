module.exports = class Person {
  constructor(name, age) {
    console.log('Hi, i am created, my name is', name);
    this.name = name;
    this.age = age;
    this.meetups = []
  }
  greet(person) {
    console.log('Hello ' + person.name + ', my name is ' + this.name);
  }

  attend(meetup) {
    this.meetups = meetup.name;
    meetup.attendees.push(this);
  }
}

printName = person => console.log(person.name, person.age);




// -----Example-----
// module.exports = class Person {
//   constructor(name, age, meetups = [], id) {
//       this.name = name
//       this.age = age
//       this.meetups = meetups
//       this.id = id
//   }

//   attend(meetup) {
//       this.meetups.push(meetup)
//       meetup.attendees.push(this)
//   }

//   static create({ name, age, meetups, id }) {
//       return new Person(name, age, meetups, id);
//   }
// }
