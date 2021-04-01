let stringOne = 'FreeCodeCamp is the best place to learn';
let stringTwo = 'Frontend and backend development';

//charAt()
console.log(stringOne.charAt(2));

//CharCodeAt()
console.log(stringOne.charCodeAt(0));

//concat()
console.log(stringOne.concat(' ', stringTwo));

//endsWIth()
console.log(stringOne.endsWith('learn'));

//fromCharCode()
console.log(String.fromCharCode(70));

//includes()
console.log(stringOne.includes('the'));

//indexOf()
console.log(stringOne.indexOf('o'));

//lastIndexOf()
console.log(stringOne.lastIndexOf('o'));

//match()
console.log(stringTwo.match(/end/g));

//repeat()
console.log(stringOne.repeat(3));

//replace()
console.log(stringOne.replace('is', 'are'));
console.log(stringOne);

//search()
console.log(stringOne.search('the'));

//slice()
console.log(stringOne.slice(2, 4));

//split()
console.log(stringOne.split(' '));

//startsWith()
console.log(stringOne.startsWith('Free'));

//subStr()
console.log(stringOne.substr(2, 4));

//substring()
console.log(stringOne.substring(2, 4));

//toLowerCase()
console.log(stringOne.toLowerCase());

//tpUpperCase()
console.log(stringOne.toUpperCase());

//trim()
console.log(stringOne.trim());