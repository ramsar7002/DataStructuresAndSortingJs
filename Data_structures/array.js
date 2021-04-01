let chars = ['ram', 'yuval', 'dor', 'kobe'];

//Push to the end
chars.push('dan');

//Pop the last
chars.pop();

//push to start
chars.unshift('first');

//remove first
chars.shift();

//remove elements{from, how much, replace with}
chars.splice(1, 2, 'Dor', 'Dan');
chars.splice(1, 1);

//Revers array
chars.reverse();

//Sort array
chars.sort();

//find the index of
chars.indexOf('kobe');

//Find the last index of
chars.lastIndexOf('ram');

chars = ['ram', 'yuval', 'dor', 'kobe', 'ran', 'shmulik', 'hadar', 'mor'];

//======Objects=======
// let dog = {
//   name: 'woody',
//   type: 'dog',
// };

// let cat = {
//   name: 'bob',
//   type: 'cat',
// };

// let pets = [dog, cat];

// console.log(pets[0].name);

// let fish = {
//   name: 'nemo',
//   type: 'fish',
// };
// pets.push(fish);
// console.log(pets[1]);
// cat.age = 3;
// console.log(pets[1]);

let arr = [];

for (let i = 1; i < 16; i++) {
  if (i % 5 == 0) arr.push('bar');
  else if (i % 3 == 0) arr.push('foo');
  else arr.push(i);
}

console.log(arr);
