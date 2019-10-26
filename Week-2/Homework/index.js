const User = require('./user.js');
const Person = require('./person.js');
const Event = require('./event.js');

technikmuseum = new Event('Technikmuseum Berlin', '8,00', '4,00');
zoo = new Event('Berlin Zoological Garden', '15,50', '10,50');
tierpark = new Event('Tierpark Berlin', '14,50', '9,50');
naturkunde = new Event('Museum für Naturkunde Berlin', '8,00', '5,00');
pergamonmuseum = new Event('Pergamonmuseum Berlin', '19', '9,50');


user1 = new User('Tanya', 'my@mail.com');
user2 = new User('Zoidberg', 'Zoidberg@mail.com');

tanya = new Person('Tanya', 30);
maria = new Person('Maria', 31);
katya = new Person('Katya', 22);
katyaJ = new Person('Katya J', 8);


user1.buy(zoo.createTicket(tanya));
user1.buy(zoo.createTicket(maria));
user1.buy(zoo.createTicket(katya));

user1.buy(tierpark.createTicket(maria));


user2.buy(naturkunde.createTicket(tanya));
user2.buy(pergamonmuseum.createTicket(maria));
user2.buy(tierpark.createTicket(katya));
user2.buy(tierpark.createTicket(katyaJ));


user1.printAllTickets();
console.log('=============');
user1.printTicketsForPerson(maria);
console.log('=============');
user2.printAllTickets();
console.log('=============');