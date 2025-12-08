//1. Find all failed test cases from an array of objects
const results = [
  { name: "Login Test", status: "passed" },
  { name: "Checkout Test", status: "failed" },
  { name: "Profile Update Test", status: "failed" }
];

//2. Compare two API responses and find missing IDs
const apiOld = [{id:1},{id:2},{id:3},{id:4}];
const apiNew = [{id:1},{id:3},{id:4}];

//3. Extract all URLs from a long text (regex)
const text = "Visit https://example.com and http://test.io for details";

//4. Count how many products are out of stock
const items = [
  {id:101, stock:3},
  {id:102, stock:0},
  {id:103, stock:0}
];

//5. Convert price strings into numbers
const priceList = ["₹199", "₹4500", "₹30"];

//6. Clean whitespace from all text fields
const user = {
  name: "  Sourav   ",
  city: "  Bangalore "
};

//7. Find all test steps that take more than 3 seconds
const steps = [
  { step: "login", time: 2.1 },
  { step: "navigate", time: 3.5 },
  { step: "checkout", time: 4.2 }
];

//8. Find mismatched field values between API and UI objects
const apiUser = {name:"Sourav", age:30, role:"Tester"};
const uiUser = {name:"Sourav", age:31, role:"Tester"};

//9. Get all unique error messages returned in a log
const logs = [
  "Timeout Error",
  "Network Error",
  "Timeout Error",
  "Element Not Found"
];

//10. Create a function that checks if all fields are non-empty
const formData = {
  name: "Sourav",
  email: "",
  city: "Bangalore"
};
