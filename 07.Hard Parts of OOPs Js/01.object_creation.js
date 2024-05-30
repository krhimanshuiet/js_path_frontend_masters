// object creation - store functions with their associated data

const user1 = {
  name: "phil",
  score: 4,
  increment: function () {
    user1.score++;
  },
};

user1.increment();
// this is the principle of encapsulation

// alternatives to create object

const user2 = {};

user2.name = "Himanshu";
user2.score = 5;
user2.increment = function () {
  user2.score++;
};

const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = function () {
  user3.score++;
};

// generate objects using function

function userCreater1(name, score) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  };
  return newUser;
}

const user4 = userCreater1("sonu", 89);
const user5 = userCreater1("ram", 9);
user4.increment();

function userCreator2(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("You are logged in");
  },
};

const user6 = userCreator2("himanshu", 89);
const user7 = userCreator2("ankit", 9);

