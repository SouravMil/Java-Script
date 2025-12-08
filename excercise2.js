//Find the missing number

let a = [7, 2, 1, 4, 3, 6, 8, 9];
let set = new Set(a);
let n = 10;
let b = [];

for (let i = 0; i <= n; i++) {
  if (!set.has(i)) {
    b.push(i);
  }
}
console.log("The missing numbers are " + b);

//Convert it into an array of strings:
console.log("Array of strings");
const elements = [
  { innerText: "Login Successful" },
  { innerText: "User created" },
  { innerText: "Entry Saved" },
];
const newArr = elements.map((inner) => inner.innerText);
console.log(newArr);

// Merge API Response Arrays & Remove Duplicates
const page1 = [101, 102, 103, 104];
const page2 = [103, 104, 105, 106];
const merged = new Set([...page1, ...page2]);
const final = [...merged].sort((a, b) => b - a);
console.log(final);

//Compare Two Arrays and Find Missing IDs
const uiIds = [10, 20, 30, 40];
const apiIds = [10, 20, 40];
const missing = uiIds.filter((Id) => !apiIds.includes(Id));
console.log(missing);

//Count Status Occurrences (“Passed”, “Failed”, “Skipped”)
const incident = ["passed", "failed", "passed", "skipped", "failed", "passed"];
const count = incident.reduce((bag, incid) => {
  if (bag[incid]) {
    bag[incid] = bag[incid] + 1;
  } else {
    bag[incid] = 1;
  }
  return bag;
}, {});

console.log(count);

//Write a function to find the product name using its id.
const products = [
  { id: 101, name: "ZARA COAT 3", price: 3500 },
  { id: 102, name: "Nike Sneakers", price: 4500 },
  { id: 103, name: "PUMA Shoes", price: 4000 },
];
function getProductName(productId) {
  for (let n = 0; n < products.length; n++) {
    if (products[n].id === productId) {
      return products[n].name;
    }
  }
  return "Product not found";
}
console.log(getProductName(102));

function getprodName(prodID) {
  const item = products.find((pro) => pro.id === prodID);
  return item ? item.name : "Product not found";
}
console.log(getprodName(103));

//Write code to find which IDs are in API but missing on UI.
const ApiIds = [1, 2, 3, 4, 5, 6];
const UiIds = [2, 3, 1, 6];
const missingId = ApiIds.filter((id) => !UiIds.includes(id));
console.log(missingId);

//Count how many times each product appears in a cart list.
const cart = ["apple", "banana", "apple", "mango", "apple", "banana"];
const cartCount = cart.reduce((bag, prod) => {
  if (bag[prod]) {
    bag[prod] = bag[prod] + 1;
  } else {
    bag[prod] = 1;
  }
  return bag;
}, {});
console.log(cartCount);

//Extract Dynamic ID from String
const responseText = "Product created successfully with ID: 98765";
const idValue = responseText.split(":")[1].trim();
console.log(idValue);

//Remove Duplicates & Sort
const nums = [8, 3, 5, 3, 1, 6, 5, 8];
const merge = [...new Set(nums)];
const sortedList = merge.sort((a,b)=> b-a);
console.log(sortedList);

//Get only product names from list of product objects
const products1 = [
  { id: 301, name: "Bag", price: 900 },
  { id: 302, name: "Socks", price: 200 },
  { id: 303, name: "Watch", price: 1500 }
];
const prodNames = products1.map(prod=> prod.name);

