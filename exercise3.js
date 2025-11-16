console.log('+++++++++Double the numbers+++++++')
const numb = [1,4,7,8,9,6,3,2,5];
const doubleNumb = numb.map(n => n*2);
console.log(doubleNumb);

console.log('+++++++Keep odd numbers++++++++');
const numbSet = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const oddNumb = numbSet.filter(m=> m%2!==0);
console.log(oddNumb);

console.log('++++++++Sum of numbers++++++++');
const inpNumbs = [1,2,3,4,5,6,7,8,9];
const sum = inpNumbs.reduce((preNumb,currNumb)=> preNumb+currNumb,0);
console.log(sum);

console.log('+++++Extract emails+++++++')
const user = [
    {name:'Shivansh', email:'shivansh@xyz.com'},
    {name:'Monika', email:'monikabera@google.com'},
    {name:'sourav', email:'SOURAV@JOKER.COM'}
]
const userEmail = user.map(u=> u.email);
console.log(userEmail);

console.log('++++++++Extract Active users++++++++++');
const mixUsers = [
    {name:'Late smt. Kanakbala',active:false},
    {name:'Late shri Ramdhan',active:true},
    {name:'Sourav',active:true},
    {name:'Late shri KK',active:false}
]
const activeUsers = mixUsers.filter(act=> act.active);
console.log(activeUsers);

console.log('++++++++Count Vowels in a string+++++++++')
const inpString = 'hello world! I am here to learn some javaScript'
const inpArr = inpString.split('');
const vowels = ['a','e','i','o','u']
const onlyVowels = inpArr.reduce((str,vow) =>{
    const lower = vow.toLowerCase();
    if(vowels.includes(lower)){
        str[lower] = (str[lower] || 0)+1;
    }
    return str;
},{})
console.log(onlyVowels);

console.log("====Create a new array with full names of students==========");
const students = [
  { firstName: "Alice", lastName: "Smith" },
  { firstName: "Bob", lastName: "Johnson" },
  { firstName: "Charlie", lastName: "Brown" }
];

const fullNames = students.map(s=> s.firstName+' '+s.lastName);
console.log(fullNames);