const User = require('./user.js');
const Event = require('./event.js');
const Database = require('./database');
const TicketMachine  = require('./ticketmachine');


const technikmuseum = new Event('Technikmuseum Berlin', '8,00', '4,00');
const zoo = new Event('Berlin Zoological Garden', '15,50', '10,50');
const tierpark = new Event('Tierpark Berlin', '14,50', '9,50');
const naturkunde = new Event('Museum für Naturkunde Berlin', '8,00', '5,00');
const pergamonmuseum = new Event('Pergamonmuseum Berlin', '19', '9,50');

const ticketMachine = new TicketMachine();

const tanya = new User('Tanya', 30);
const maria = new User('Maria', 31);
const katya = new User('Katya', 22);
const katyaJ = new User('Katya J', 8);


ticketMachine.buyTicket(zoo, tanya);
ticketMachine.buyTicket(technikmuseum, maria);
ticketMachine.buyTicket(zoo, katya);
ticketMachine.buyTicket(tierpark, maria);
ticketMachine.buyTicket(naturkunde, tanya);
ticketMachine.buyTicket(pergamonmuseum, maria);
ticketMachine.buyTicket(tierpark, katya);
ticketMachine.buyTicket(tierpark, katyaJ);

ticketMachine.printAllTickets();
console.log('=============');
ticketMachine.printTicketsForUser(maria);
console.log('=============');

Database.save('./tickets.json', ticketMachine.getAllTickets());

const loadedFile = Database.load('./tickets.json');

loadedFile.forEach(function(value) {console.log(value)});