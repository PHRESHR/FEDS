// Our Array's
const animals = [
  {name: 'Oscar', species: 'fish'},
  {name: 'Jordan', species: 'turtle'},
  {name: 'Snaily Snail', species: 'Snail'},
  {name: 'Fudge', species: 'cat'},
  {name: 'Kilo', species: 'dog'},
  {name: 'Riley', species: 'cat'},
  {name: 'Talula', species: 'cat'},
  {name: 'Missy', species: 'dog'}
];

const orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 775},
  {amount: 150},
  {amount: 625}
];

// Learning Filter function
const filterFunc = () => {

  // Using for loops
  // let cats = [];
  // for (let i = 0; i < animals.length; i++) {
  //   if(animals[i].species === 'cat') {
  //     cats.push(animals[i]);
  //   }
  // }
  //
  // console.log(cats);

  // Using arr.filter ** Functional Programming **
  const cats = animals.filter((x) => x.species === 'cat');
  console.log(cats);
};

// Learning Map function
const mapFunc = () => {

  // Using for loops
  // let names = [];
  // for (var i = 0; i < animals.length; i++) {
  //   names.push(animals[i].name);
  // }
  // console.log(names);

  // Using arr.map ** Functional Programming **
  const names = animals.map((x) => x.name)
  console.log(names);
};

// Learning Reduce function
const reduceFunc = () => {

  // Using for loops
  // let totalAmount = 0;
  // for (var i = 0; i < orders.length; i++) {
  //   totalAmount += orders[i].amount
  // }
  // console.log(totalAmount);

// Using arr.reduce ** Functional Programming **
  const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
  console.log(totalAmount);
};

filterFunc();
mapFunc();
reduceFunc();
