const Database = require('./database');
const Meetup = require('./meetup');
const Person = require('./person');

Database.load('meetup.json', ((err, loadedFile) => {
  if (err) throw err;
  
  console.log('Hello');
  const wtmb = Meetup.create(loadedFile);
  const janna = new Person('Janna', 30);

  janna.attend(wtmb);
  // Meetup.create({ name: 'hello!', attendees: [] });
  // Database.save('./meetup.json', wtmb);
  wtmb.printAttendeeNames();

  console.log(wtmb.name);
}));





// -----Example-----
// const Person = require('.person')
// const Meetup = require('.meetup')
// const PersonService = require('./services/person-service')
// const MeetupService = require('./services/meetup-service')

// console.log('Hello World!')
// console.log('Hello World!')

// async function main() {
//   const mert = new Person('Mert', 33)
//   const armagan = new Person('Armagan', 34)

//   const wtmb = new Meetup('Women Tech Makers Berlin', 'Eurostaff')
//   armagan.attend(wtmb)
//   mert.attend(wtmb)
//   wtmb.report()

//   await PersonService.add(mert)
//   await PersonService.add(armagan)

//   const people = await PersonService.findAll()

//   console.log(people[0].name)

//   await PersonService.del(1)

//   const newPeople = await PersonService.findAll()

//   console.log(newPeople[0].name)
// }

// main()






