console.log('1.Filter even numbers');
const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(numb=> numb%2==0);
console.log(even);

console.log('2.Filter names with length greater than 4');
const names = ["Amit", "Neha", "Sourav", "Pooja", "John"];
const longerNames = names.filter(name=> name.length>4);
console.log(longerNames);

console.log('3.Filter only adults (age ≥ 18)');
const people = [
  { name: "A", age: 15 },
  { name: "B", age: 20 },
  { name: "C", age: 17 },
  { name: "D", age: 25 }
];
const adultPeople = people.filter(p=> p.age>=18);
console.log(adultPeople);

console.log('4.Filter strings that start with “A”');
const words = ["Apple", "Banana", "Avocado", "Mango", "Apricot"];
const newWords = words.filter(word=> word[0]==='A');
console.log(newWords);

console.log('5.Filter numbers greater than 50');
const values = [10, 60, 45, 100, 25];
const greaterValues = values.filter(value=> value>50);
console.log(greaterValues);

console.log('6.Filter products cheaper than 1000');
const products = [
  { name: "Laptop", price: 45000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1200 },
  { name: "USB Cable", price: 300 }
];
const cheaperProducts = products.filter(prod=> prod.price<1000);
console.log(cheaperProducts);

console.log('7. Filter sentences that contain the word “JavaScript”');
const sentences = [
  "I love JavaScript",
  "Python is great",
  "JavaScript is fun",
  "React is a library"
];
const filteredSentence = sentences.filter(sent=> sent.includes('JavaScript'));
console.log(filteredSentence);

console.log('8.Filter employees who are active');
const employees = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];
const activeEmployee = employees.filter(emp=> emp.active==true);
const onlyActiveNames = activeEmployee.map(emp=> emp.name);
console.log(onlyActiveNames);

console.log('9. Filter books published after 2010');
const books = [
  { title: "Book 1", year: 2008 },
  { title: "Book 2", year: 2015 },
  { title: "Book 3", year: 2020 }
];
const latestBooks = books.filter(book=> book.year>2010);
console.log(latestBooks);
const latestNames = latestBooks.map(book=> book.title);
console.log(latestNames);

console.log('10.Filter users whose email includes "gmail.com"');
const users = [
  { name: "A", email: "a@gmail.com" },
  { name: "B", email: "b@yahoo.com" },
  { name: "C", email: "c@gmail.com" }
];
const gmailUser = users.filter(user=> user.email.includes('@gmail.com'));
console.log(gmailUser);