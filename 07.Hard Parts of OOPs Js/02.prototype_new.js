// prototype and new

function UserCreater1(name, score) {
  const newUser = Object.create(UserFunctionStore);
  // newUser.__proto__ -> hidden property which is linked to userFunctionStore object
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const UserFunctionStore = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log("you are logged in");
  },
};

const user1 = UserCreater1("ram", 8);
const user2 = UserCreater1("shayam", 23);
user2.increment();

// functions are both objects and function
/*
function multiplyBy2(num){
  return num*2
}

multiplyBy2.stored = 5;
multiplyBy2(3) -> 6;

multiplyBy2.stored -> 5
multiplyBy2.prototype  = {}
*/
// automate with new

/*
1.automatically create object called this = {}
2.links constructor function prototype object to __proto__ automatically
3.return this object 
*/

function UserCreater2(name, score) {
  this.name = name;
  this.score = score;
}

UserCreater2.prototype.increment = function () {
  function add(){
    this.score++
  }

  add();
  // this.score++;
};
UserCreater2.prototype.login = function () {
  console.log("you are logged in!");
};

const user3 = new UserCreater2("phil", 89);
const user4 = new UserCreater2("jiva", 89);

user3.login();
user3.increment();
user3;
