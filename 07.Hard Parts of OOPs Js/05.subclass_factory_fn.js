// sub-classing with factory functions!

// console.log(Function.__proto__ === Object.__proto__);

// sub classing

// our class

function UserCreater(name, score) {
  const newUser = Object.create(UserFunctions);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const UserFunctions = {
  sayName: function () {
    console.log("I am " + this.name);
  },
  increment: function () {
    this.score++;
  },
};

const user1 = UserCreater("ram", 78);

//sub-class

function PaidUserCreater(paidName, paidScore, accountBalance) {
  const newPaidUser = UserCreater(paidName, paidScore);
  Object.setPrototypeOf(newPaidUser, PaidUserFunctions);
  newPaidUser.accountBalance = accountBalance;
  return newPaidUser;
}

const PaidUserFunctions = {
  increaseBalance: function () {
    this.accountBalance++;
  },
};

// console.log(PaidUserCreater.prototype.__proto__ === Object.prototype)

Object.setPrototypeOf(PaidUserFunctions, UserFunctions);

const paidUser1 = PaidUserCreater("shayam", 23, 67577);
paidUser1;
paidUser1.score;

// we have another way of running a function that allow us to control the assignment of this.
// how does call and apply
const obj = {
  num: 3,
  increment: function (...args) {
    args;
    this.num++;
  },
};

const otherObj = {
  num: 4,
};

obj.increment();
obj;
obj.increment.call(otherObj, 10, 20);
obj.increment.apply(otherObj, [10, 20]);
const otherObjIncrement = obj.increment.bind(otherObj, 10, 20);
otherObjIncrement();

/*
this always refers to the object to the left of the dot on which the 
function (method) is being called - unless we override that by running 
the function using call or apply which
lets us set the value of this inside of the increment function.
*/
