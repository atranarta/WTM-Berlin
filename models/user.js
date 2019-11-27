const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  age: {
    type: Number,
    required: true,
    min: 0
  }
});

UserSchema.method.attend = function() {
  this.events.push;
}

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;


// module.exports = class User {
//   constructor(name, age, id) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
//   }

//   static create({ name, age, id }) {
//     return new User(name, age, id);
//   }  
// };