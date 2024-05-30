// scope and this

function UserCreator1(name, score) {
  this.name = name;
  this.score = score;
}
UserCreator1.prototype.increment = function () {
  // function add() {
  //   this.score++;
  // }
  // add.call(this);
  // const add = function(){
  //   this.score++
  // }
  const add = () => this.score++;
  add();
  // this.score++;
};

UserCreator1.prototype.login = function () {
  console.log("you are logged in!!");
};

const user1 = new UserCreator1("neva", 90);
const user2 = new UserCreator1("cleric", 67);

user1.increment();
user2.increment();
user1;

// ES6 class keyword (syntactic sugar)

class UserCreater2 {
  #name; // private data member
  static #INFINITY = 9000; // private static data member
  constructor(name, score) {
    this.#name = name;
    this.score = score;
  }
  increment() {
    this.score++;
    this.INFINITY = 8000;
  }
  login() {
    console.log("you logged in!!", this.#name);
  }

  static displayInfinity() {
    // static member function
    console.log(this.#INFINITY);
  }
}

const user3 = new UserCreater2("ela", 34);
console.log(UserCreater2.prototype);
console.log(user3.__proto__ === UserCreater2.prototype);
console.log(user3.name);
user3.login();
console.log(UserCreater2.displayInfinity());

const obj1 = Object.create({ name: "himanshu"});
const obj2 = Object.create(obj1);
const obj3 = Object.create(null);


console.log(obj1.__proto__);
console.log(obj2.__proto__.__proto__.__proto__ === Object.prototype);
console.log(obj3.__proto__ === Object.prototype);

