const Database = require('./database.js');

const loadedFile = Database.load('meetup.json');
console.log(loadedFile);