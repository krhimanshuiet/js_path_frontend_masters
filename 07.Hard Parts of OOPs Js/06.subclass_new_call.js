// sub classing using new

function UserCreater(name, score) {
  this.name = name;
  this.score = score;
}

UserCreater.prototype.increment = function () {
  this.score++;
};

UserCreater.prototype.sayHello = function () {
  console.log(" hello " + this.name);
};

const user1 = new UserCreater("ram", 45);
const user2 = new UserCreater("shayam", 15);
user1.sayHello();

function PaidUserCreater(paidName, paidScore, accountBalance) {
  console.log(this);
  UserCreater.call(this, paidName, paidScore);
  // UserCreater.apply(this, [paidName, paidScore]);
  // UserCreater.bind(this, paidName, paidScore)();
  this.accountBalance = accountBalance;
}

PaidUserCreater.prototype = Object.create(UserCreater.prototype);

PaidUserCreater.prototype.increaseBalance = function () {
  this.accountBalance++;
};

const paidUser = new PaidUserCreater("amit", 56, 89688);

paidUser;
paidUser.sayHello();
console.log(paidUser.__proto__);
console.log(UserCreater.__proto__ === Function.prototype);
console.log(UserCreater.prototype.__proto__ === Object.prototype);
console.log(Object.__proto__ === Function.prototype);
