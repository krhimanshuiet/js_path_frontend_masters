// sub classing using class keyword.
class UserCreater {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
  sayName() {
    console.log("hello " + this.name);
  }
}

const user1 = new UserCreater("ram", 90);
user1.increment();
user1;
user1;
class PaidUserCreater extends UserCreater {
  // under the hood extends does this for us PaidUserCreater.prototype = Object.create(UserCreater.prototype)
  // and second thing it does is it reference __proto__ inside the PaidUserCreator to UserCreator
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore);
    // same as UserCreator.call(this,paidName,paidScore)
    // same as super new UserCreator(paidName,paidScore)
    // same as super Reflect.construct(UserCreater,[paidName,paidScore],PaidUserCreater)
    // under the hood super does this for us UserCreater.call(this,paidName,paidScore),
    // since UserCreator is available in its __proto__
    // and when it calls UserCreater under the hood the this object that it makes it ints
    // local memory is not linked to UserCreator.prototype  as usual instead
    // of that is linked to PaidUserCreator.prototype
    this.accountBalance = accountBalance;
  }
  increaseAccountBalance() {
    this.accountBalance++;
  }
}
const paidUser1 = new PaidUserCreater("shayam", 98, 6363);
paidUser1;
paidUser1.increaseAccountBalance();
paidUser1.sayName();
paidUser1;
