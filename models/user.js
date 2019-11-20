module.exports = class User {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  static create({ name, age, id }) {
    return new User(name, age, id);
  }  
};