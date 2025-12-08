console.log("1.Convert numbers to their squares=========");
const numbs = [1, 2, 3, 4, 5];
const square = numbs.map(n=> n*n);
console.log(square);

console.log("2.Convert strings to uppercase====");
const names = ["alice", "bob", "charlie"];
const upperCaseNames = names.map(name=> name.toUpperCase());
console.log(upperCaseNames);

console.log("3.Extract only first names=====");
const people = [
  { first: "Sourav", last: "Das" },
  { first: "Alice", last: "Smith" },
  { first: "Bob", last: "Johnson" }
];
const firstName = people.map(person=> person.first);
console.log(firstName);

console.log("4.Add 10 to every number=====");
const values = [5, 10, 15, 20];
const newValue = values.map(value=> value+10);
console.log(newValue);

console.log("5.Get lengths of each string====")
const cities = ["Delhi", "Mumbai", "Kolkata", "Chennai"];
const charLength = cities.map(city=> city.length);
console.log(charLength);

console.log("6.Create an array of student full names====");
const students = [
  { first: "Amit", last: "Sharma" },
  { first: "Rahul", last: "Verma" },
  { first: "Priya", last: "Singh" }
];
const fullName = students.map(s=> s.first+' '+s.last);
console.log(fullName);

console.log("7.Convert temperatures from Celsius to Fahrenheit====");
const celsius = [0, 10, 20, 30];
const ferenhite = celsius.map(cel=> (cel*9/5)+32+' F');
console.log(ferenhite);

console.log('8.Add a new field “isAdult” based on age====');
const users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 15 }
];
const adult = users.map(user=> {return{...user,
    isAdult: user.age>=18
}});
console.log(adult);

console.log("9.Extract product prices====");
const products = [
  { product: "Laptop", price: 45000 },
  { product: "Mouse", price: 500 },
  { product: "Keyboard", price: 1200 }
];
const priceDetail = products.map(p=> `The price of the ${p.product} is ${p.price}`);
console.log(priceDetail);

console.log('10.Convert array of numbers to strings======');
const numbers = [10, 20, 30];
const string = numbers.map(numb=> numb.toString());
console.log(string);

console.log('11. Square all numbers');
const nubm = [2, 4, 6, 8];
const sq = nubm.map(n=> n*n);
console.log(sq);

console.log('12.Convert names to uppercase');
const lowerCase = ["arjun", "priya", "sneha"];
const upperCase = lowerCase.map(l=> l.toUpperCase());
console.log(upperCase);

console.log('13.Extract only the “name” from objects');
const peopleInfo = [
  { name: "Rohan", age: 28 },
  { name: "Aditi", age: 25 },
  { name: "Karan", age: 30 }
];
const onlyNames = peopleInfo.map(p=> p.name);
console.log(onlyNames);


