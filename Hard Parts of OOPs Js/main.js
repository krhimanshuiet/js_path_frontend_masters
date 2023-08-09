// oops in js

//creating object

// const user = {
//     name:"himanshu",
//     score:80,
//     increment:function(){
//         this.score++;
//     }
// }
// user.increment();
// console.log(user.score)

// const obj = Object.create(null)

// generate object using a function

// function userCreater(name , score){
//     const newUser = Object.create(null)
//     newUser.name = name;
//     newUser.score = score
//     newUser.increment = function(){
//         newUser.score++;
//     }
//     return newUser;

// }

// const user1 = userCreater("himanshu" , 90);
// const user2 = userCreater("akash" , 904);
// const user3 = userCreater("mohit" , 940);
// prototype and new - avoid duplication with prototype
// const functionStore = {
//     increment: function(){
//         this.score++;
//     },
//     login:function(){
//         console.log("you are logged in")
//     }
// }
// const user12 = {
//     name:"hks",
//     score:67
// }
// make a link with Object.create technique
// const user10 = Object.create(functionStore)
// solution
// function userCreater(name, score) {
//   const newUser = Object.create(functionStore);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }
// const functionStore = {
//   increment: function () {
//     return this.score++;
//   },
//   login: function () {
//     console.log("you are now logged in");
//   },
// };
// const user1 = userCreater("himanshu", 90);
// user1.__proto__.increment()
// user1.increment();
// console.log(user1.score)

// new and this

//automation

// function multiplyBy2(num){
//     return num*2;
// }

// multiplyBy2.stored = 5
// multiplyBy2(2)
// console.log(multiplyBy2.stored)
// console.log(multiplyBy2.prototype)

// function UserCreater(name, score) {
//   this.name = name;
//   this.score = score;
// }

// UserCreater.prototype.increment = function () {
//   return this.score++;
// };

// UserCreater.prototype.logedIn = function () {
//   console.log("loged in successfully");
// };
// const user1 = new UserCreater("lisa", 908);
// user1.increment();
// console.log(user1.score);

//scope and this

// function UserCreater(name , score){
//     this.name = name;
//     this.score = score;
// }

// UserCreater.prototype.increment = function(){
//     const add1 = () => {this.score++}
//     add1();
// }

// UserCreater.prototype.login = function(){
//     console.log("loged in successfully")
// }
// const user1 = new UserCreater('lisa' , 90);
// user1.increment()
// console.log(user1.score)

// es6 classes

// class UserCreater {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//   }

//   increment() {
//     this.score++;
//   }

//   login() {
//     console.log("Logged in Successfully");
//   }
// }
// const user1 = new UserCreater("lisa", 98);
// UserCreater.prototype.talk = function(){console.log("i talk")}
// user1.talk()
// console.log(user1.hasOwnProperty('score'))
// user1.__proto__.login()

// subclassing with factory function

// function UserCreator(name, score) {
//   const newUser = Object.create(userFunctions);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }
// userFunctions = {
//   sayName: function () {
//     console.log("I am " + this.name);
//   },
//   increment: function () {
//     this.score++;
//   },
// };
// const user1 = UserCreator("hks", 908);
// user1.sayName()
// function PaidUserCreater(paidName , paidScore , accountBalance){
//     const newPaidUser = UserCreator(paidName , paidScore);
//     Object.setPrototypeOf(newPaidUser , paidUserFunction)
//     newPaidUser.accountBalance = accountBalance;
//     return newPaidUser;
// }
// const paidUserFunction = {
//     increaseBalance:function(){
//         this.accountBalance++;
//     }
// }
// Object.setPrototypeOf(paidUserFunction , userFunctions)
// const paidUser1 = PaidUserCreater('sonu' , 8 , 250);
// paidUser1.increaseBalance();
// paidUser1.accountBalance; 
// paidUser1.sayName()

// using new keyword

// function UserCreator(name , score){
//     this.name = name;
//     this.score = score;
// }
// UserCreator.prototype.sayName = function(){return 'My name is' + this.name}
// UserCreator.prototype.increment = function(){return this.score++}
// const user1 = new UserCreator('lisa' , 98)
// user1.sayName()
// user1.increment()
// function PaidUserCreator(paidName , paidScore, accountBalance){
//     UserCreator.call(this , paidName , paidScore)
//     this.accountBalance = accountBalance;
// }
// PaidUserCreator.prototype = Object.create(UserCreator.prototype);
// PaidUserCreator.prototype.increseBalance = function(){return this.accountBalance++}
// const paidUser = new PaidUserCreator('mack' , 98 ,9870);
// paidUser.sayName()
// paidUser.increseBalance()

// using class

class UserCreater {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  sayName() {
    console.log("I am " + this.name);
  }

  increment() {
    this.score++;
  }
}
const user1 = new UserCreater("mark", 98);
const user2 = new UserCreater("madisom", 78);

class PaidUserCreater extends UserCreater {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    this.accountBalance = accountBalance;
  }

  increaseAccountBalance() {
    return this.accountBalance++;
  }
}
const paidUser1 = new PaidUserCreater("hayden", 98, 9800);
paidUser1.sayName();
paidUser1.increaseAccountBalance();
