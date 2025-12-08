//Compare two arrays of objects & find name mismatch
const apiProducts = [
  { id: 201, name: "Laptop" },
  { id: 202, name: "Keyboard" },
  { id: 203, name: "Mouse" }
];
const uiProducts = [
  { id: 201, name: "Laptop" },
  { id: 202, name: "Keybord" },
  { id: 203, name: "Mouse" }
];
const mismatch = apiProducts.filter(api=> uiProducts.some(ui=> ui.id === api.id && api.name !== ui.name));
console.log(mismatch);

//Find duplicate IDs returned from API
const apiIds = [11, 12, 13, 11, 14, 12, 15];
const duplicate = apiIds.filter((numb,index)=> apiIds.indexOf(numb) !== index);
console.log(duplicate);

//Extract price value from a string
const message = "Total cart value is ₹4500 including discounts";
const priceValue = message.split(" ")[4].trim();
console.log(priceValue);

//Get only product names from list of product objects
const products = [
  { id: 301, name: "Bag", price: 900 },
  { id: 302, name: "Socks", price: 200 },
  { id: 303, name: "Watch", price: 1500 }
];
const prodNames = products.map(prod=> prod.name);
console.log(prodNames);
//Find the highest price product 
const highestPriceProduct = products.reduce((max,less) => max.price>less.price ? max : less);
console.log(highestPriceProduct);
//Filter products with price greater than 500
const greater500 = products.filter(prod=> prod.price>500);
console.log(greater500);
//Count how many products are above ₹1000
const countGreater1000 = products.filter(prod=> prod.price>1000);
console.log("Total number of product exceeds Inr 1000 is "+countGreater1000.length);

//reverse the string
const string = "Sourav";
const revString = string.split("").reverse();
const jointString = revString.join("").toString();
console.log(jointString);

//Validate page title text using contains logic
const pageTitle = "Welcome - Automation Dashboard";
const expected = "Welcome"; //Return true if expected word is present
function pageValidation()
{
  const words = pageTitle.split(" ");
  for(let i=0;i<words.length;i++)
  {
    if(words[i].includes(expected))
    {
      return true;
    }
  }
  return false;
}
console.log("Page Validation is "+pageValidation());

//Create a function that validates email format
let email = "invalid-email";
function validEmailFormat(email)
{
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
if(validEmailFormat(email))
{
  console.log("It is a valid email");
} else {
  console.log("It is an invalid email");
}
//validateEmail("test@gmail.com") → true  
//validateEmail("invalid-email") → false


//Convert an array of prices into formatted currency strings
const prices = [100, 2500, 399];  //output: ["₹100", "₹2500", "₹399"]
const priceString = prices.map(str=> "₹"+str);
console.log(priceString);

