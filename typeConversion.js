//Assignment 1: Safe String Conversion
function convertToString(value) {
  return String(value);
}
console.log(convertToString(333));
console.log(convertToString(true));
console.log(convertToString(undefined));
console.log(convertToString(null));

//Assignment 2: Boolean Truth Table
const values = [0, 1, "", " ", null, undefined, [], {}, "false"];

values.forEach((v) => {
  console.log(v, Boolean(v));
});

//Assignment 3: Price Calculator (Real API Case)
const prices = ["199", "299.50", "100", "invalid", null];
let total = 0;
prices.forEach((p) => {
  const num = Number(p);
  if (!isNaN(num)) {
    total += num;
  }
});
console.log(total);

//Assignment 4: Form Input Normalizer
const formData = {
  age: "25",
  height: "170.5",
  isMember: "false",
  discount: "",
};
const normalized = {};

Object.entries(formData).forEach(([key, val]) => {
  if (key === "age") normalized.age = Number(val);
  else if (key === "height") normalized.height = Number(val);
  else if (key === "isMember") normalized.isMember = val === "true";
  else if (key === "discount")
    normalized.discount = val === "" ? 0 : Number(val);
});
console.log(normalized);

//Convert to:
// {
//   age: 25,
//   height: 170.5,
//   isMember: true,
//   discount: 0
// }

//Assignment 5: Predict the Output (No Execution 🚫)
console.log("5" + 3); // 53
console.log("5" - 3); // 2
console.log(true + false); //undefined
console.log([] + []); // ""
console.log([] + {}); // [object Object]
console.log({} + []); //[object Object]
console.log({} + {}); // [object Object] [object Object]
console.log(null == undefined); //true
console.log(null === undefined); //false

//Assignment 6: Safe Number Converter (Production-Grade) -Create a function that converts input to a number safely.
function safeNumber(value) {
  if (value === null || value === "") return 0;
  const numb = Number(value);
  if (isNaN(numb)) return null;
  return numb;
}

console.log(safeNumber("123")); // 123
console.log(safeNumber("12.5")); // 12.5
console.log(safeNumber("")); // 0
console.log(safeNumber(null)); // 0
console.log(safeNumber("abc")); // null
console.log(safeNumber(undefined)); // null

console.log("============New assignments=========");
//Assignment 1: Clean Form Fields
const data = {
  name: "  Sourav  ",
  age: "28 ",
  salary: " 45000 ",
  active: "false",
  joinDate: "",
};
const normalized2 = {};
Object.entries(data).forEach(([key, value]) => {
  if (key === "name") normalized2.name = value.trim();
  else if (key === "age") normalized2.age = Number(value);
  else if (key === "salary") normalized2.salary = Number(value);
  else if (key === "active") normalized2.active = value === "true";
  else if (key === "") normalized2.joinDate = value ? value : null;
});
console.log(normalized2);

//Assignment 2: Sum Only Valid Numbers
const arr = ["20", "30.5", "hello", null, "100", undefined];
let total1 = 0;
arr.forEach((val1) => {
  const numb1 = Number(val1);
  if (!isNaN(numb1)) {
    total1 += numb1;
  }
});
console.log(total1);

//Assignment 3: Detect Data Type
function detectType(item) {
  if (Number.isNaN(item)) {
    console.log("The input value is a NaN");
  } else if (item === null) {
    console.log("The input value is a " + item);
  } else if (Array.isArray(item)) {
    console.log("The input value is an array");
  } else if (typeof item === "string") {
    console.log("The input value is a " + typeof item);
  } else if (typeof item === "object") {
    console.log("The input value is a " + typeof item);
  } else if (typeof item === "number") {
    console.log("The input value is a " + typeof item);
  } else if (typeof item === "boolean") {
    console.log("The input value is a " + typeof item);
  }
}
detectType("123");
detectType(123);
detectType([]);
detectType({});
detectType(null);
detectType(NaN);
detectType(true);
//========================================================================================

//Assignment 4: Convert Boolean-Like Strings
const boolArr = ["true", "false", "0", "1", "", "yes", "no", "abc"];
let newBoolArr = [];
boolArr.forEach((toy) => {
  const lowerToy = toy.toLowerCase();
  if (["true", "1", "yes"].includes(lowerToy)) {
    newBoolArr.push(true);
  } else if (["false", "0", "no"].includes(lowerToy)) {
    newBoolArr.push(false);
  } else {
    newBoolArr.push(null);
  }
});
console.log(newBoolArr);

// "true" → true
// "1" → true
// "false" → false
// "0" → false
// "yes" / "no" → also convert
// anything else → null

///Assignment 6: Convert Values in Array of Objects
const list = [
  { price: "199", qty: "2" },
  { price: "49.5", qty: "1" },
  { price: null, qty: "3" },
  { price: "abc", qty: "5" },
];
let newList = [];
list.forEach((obj) => {
  let row = {};

  Object.entries(obj).forEach(([key, value]) => {
    const priceNum = Number(obj.price);
    row.price = isNaN(priceNum) ? null : priceNum;

    row.qty = Number(obj.qty);
    newList.push(row);
  });
});
console.log(newList);
// Convert:
// price → number (invalid → 0)
// qty → number
// add new field total = price * qty

///Assignment 7: Safe Division
function safeDivide(a, b) {
  const numbA = Number(a);
  const numbB = Number(b);
  if (Number.isNaN(numbA) && Number.isNaN(numbB)) {
    return null;
  } else if (numbB === 0 && numbA === 0) {
    return NaN;
  } else {
    return numbA / numbB;
  }
}
console.log("The result of safedivision is " + safeDivide(8, 0));
// Rules:
// Convert both to numbers
// If conversion fails → return null
// If b === 0 → return "Infinity"
// Else → return a / b

///Assignment 8: Convert Query Params
const input = "?age=25&height=170.5&name=Sourav&active=true";
const sliced = input.slice(1);
const inpArr = sliced.split("&");
console.log(inpArr);
let finalObject = {};
for (let item of inpArr) {
  const [key, value] = item.split("=");
  let convertedValue;

  if (value === "true") {
    convertedValue = true;
  } else if (value === "false") {
    convertedValue = false;
  } else if (!Number.isNaN(Number(value))) {
    convertedValue = Number(value);
  } else {
    convertedValue = value;
  }
  finalObject[key] = convertedValue;
}
console.log(finalObject);

//expected output = {
//   age: 25,
//   height: 170.5,
//   name: "Sourav",
//   active: true
// }

///Assignment 9: Safe Array Calculator
const inp = ["10", "20", "a", "5.5", null, "50kg"];
// expected output = {
//   valid: [10, 20, 5.5],
//   invalid: ["a", "50kg"],
//   sum: 35.5
// }

///Assignment 10: Convert Mixed Values
const mixed = [
  "25",
  30,
  true,
  false,
  null,
  undefined,
  "   15   ",
  "abc",
  {},
  [],
  "0",
];

normalized(mixed);
{
}

///Assignment 5: Strict Number Validator
strictNumber(val);
{
  const numbVal = Number(val);
  if (numbVal === null) {
    console.log("This is not a valid number (null)");
  } else if (Number.isNaN(numbVal)) {
    console.log("This is not a valid number");
  } else if (Array.isArray(numbVal)) {
    console.log("This is not a valie number (array)");
  }
}
//Valid number → number
// " " (spaces) → null
// "123abc" → null
// boolean (true, false) → null
// array → null
// empty string → 0
