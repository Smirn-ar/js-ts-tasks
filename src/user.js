class User {
  #firstName;
  #secondName;
  #age;

  constructor(firstName, secondName, age) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
  }

  get age() {
    return this.#age;
  }
  set age(age) {
    if (typeof age !== 'number') {
      throw new Error('возраст должен быть числом');
    }
    this.#age = age;
  }

  set firstName(firstName) {
    if (typeof firstName !== 'string') {
      throw new Error('имя должно быть строкой');
    }
    this.#firstName = firstName;
  }

  set secondName(secondName) {
    if (typeof secondName !== 'string') {
      throw new Error('фамилия должна быть строкой');
    }
    this.#secondName = secondName;
  }

  get name() {
    return `${this.#firstName} ${this.#secondName}`;
  }
  introduce() {
    return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`;
  }
  celebrateBirthday() {
    this.#age = this.#age + 1;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  const user = new User(firstName, secondName, age);
  return user;
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (data) {
  const users = [];
  for (let i = 0; i < data.length; i++) {
    users.push(new User(data[i].firstName, data[i].secondName, data[i].age));
  }
  return users;
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<User>} users
 * @param {number} age
 * @returns {Array<User>}
 */
module.exports.findUsersByAge = function (users, age) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age === age) {
      result.push(users[i]);
    }
  }
  return result;
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return function (users) {
    return users.sort(TestUtils.sortComparatorByAge);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  for (let i = 0; i < users.length; i++) {
    if (i % 2 === 0) {
      users[i].celebrateBirthday();
    }
  }
  return users;
};
