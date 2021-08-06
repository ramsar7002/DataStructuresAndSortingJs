const bankDepositSum = accounts.map(acc => {
  return acc.movements
}).flat().reduce((acu, cur) => acu + cur);
//console.log(bankDepositSum)

const numDeposit1000 = accounts.map(acc => {
  return acc.movements
}).flat().filter(mov => mov >= 1000).length;

console.log(numDeposit1000)

//Other wat to calculate numDeposit1000
const numDeposit1000_1 = accounts.map(acc => {
  return acc.movements
}).flat().reduce((acc, cur) => cur >= 1000 ? acc + 1 : acc, 0)

//console.log(numDeposit1000_1)

let a = 10;
//console.log(++a)

const { deposits, withdrawls } = accounts.map(acc => {
  return acc.movements
}).flat().reduce((acc, cur) => {
  // cur > 0 ? acc.deposits += cur : acc.withdrawls += cur;\
  acc[cur > 0 ? 'deposits' : 'withdrawls'] += cur
  return acc
}, { deposits: 0, withdrawls: 0 })

//console.log(deposits, withdrawls)

const convertTitleCase = (title) => {
  const exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'in', 'with'];
  const titleCase = title.toLowerCase().split(' ').map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
  return titleCase
}

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title'));


//Check if this is a number
console.log(Number.isFinite('20'))

//Check if this is an integer
console.log(Number.isInteger('20'))

//numbers after the dot
console.log((2.77777).toFixed(5))
