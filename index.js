// must know Array
// forEach, filter, map, find, includes, join, pop, push, reduce, sort
// slice, reverse

// forEach
const arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Using forEach to print elements of arr1:");
arr1.forEach((num) => {
  console.log(num);
});

// filter
const evens = arr1.filter((num) => num % 2 === 0);
console.log(`The array of even number filtered from arr1 is ${evens}`);

// map
const addOne = arr1.map((num) => (num += 1));
console.log(`The array after mapping each element of arr1 +1 is ${addOne}`);

// find
const result = arr1.find((num) => num > 5);
if (result) {
  console.log(`The result from find that is > 5 is ${result}`);
} else {
  console.log("No result found");
}

// includes
if (arr1.includes(-1)) {
  console.log("-1 is found in arr1");
} else {
  console.log("-1 is not found in arr1");
}

// join
const arr2 = arr1.join("-");
console.log(`The result of joining arr1 and arr2 using - is ${arr2}`);

// pop
const removed = arr1.pop();
console.log(`The popped element is ${removed}`);

// push
console.log(`The length of the array before push is ${arr1.length}`);
arr1.push(-1);
console.log(`The length of the array after pushing -1 is ${arr1.length}`);
console.log(`New arr1: ${arr1}`);

// reduce
const sum = arr1.reduce(
  (accumulator, currentValue) => (accumulator += currentValue),
);
console.log(`The sum after reduce of arr1 is ${sum}`);

// sort
console.log(`Arr1 before sorting: ${arr1}`);
arr1.sort((a, b) => b - a);
console.log(`Arr1 after sorting by descending order: ${arr1}`);

// other useful ones
// some, every, findIndex,

// some
if (arr1.some((num) => num < 0)) {
  console.log("Some number in arr1 is < 0");
} else {
  console.log("No number in arr1 is < 0");
}

// every
if (arr1.every((num) => num > 0)) {
  console.log("Every number in arr1 is > 0");
} else {
  console.log("Not every number in arr1 is > 0");
}

// findIndex
const index = arr1.findIndex((num) => num === 0);
console.log(`The index of number 0 in arr1 is ${index}`);

// static:
// isInteger, isNaN, parseInt, parseFloat

// isInteger
const a = "A";
const one = "1";
const two = 2;

if (Number.isInteger(one)) {
  console.log(`"${one}" is an integer`);
} else {
  console.log(`"${one}" is not an integer`);
}

//isNaN
if (Number.isNaN(one / a)) {
  console.log(`${one} / ${a} is not a number`);
} else {
  console.log(`${one} / ${a} is a number`);
}

// parseInt
console.log("Use parstInt to turn string to base 10 integer");
const numOne = Number.parseInt(one);
if (Number.isInteger(numOne)) {
  console.log(`${numOne} is an integer`);
} else {
  console.log(`${numOne} is not an integer`);
}

const piStr = "3.14";
const piNum = Number.parseFloat(piStr);
console.log(
  `piStr of "3.14" converted to float using parstFloat is ${piNum} of type ${typeof piNum}`,
);

// must know Strings
// split, toUpperCase, toLowerCase
// useful ones:
// includes, charAt, slice, replace, substring, trim

const str = "This is a string";

// split
const words = str.split(" ");
console.log(`The string split into words are ${words}`);

// toUpperCase
console.log(`The string converted to uppercase is ${str.toUpperCase()}`);

// toLowerCase
console.log(`The string converted to lowercase is ${str.toLowerCase()}`);

// includes
if (str.includes("This")) {
  console.log(`"This" is included in string`);
} else {
  console.log(`"This" is not included in string`);
}

// charAt
console.log(`The char at index 3 is ${str.charAt(3)}`);

//slice
console.log(
  `Slicing the string from index 0 to 7 exclusive is ${str.slice(0, 7)}`,
);

const str2 = str.replace("string", "new string");
console.log(`Replacing the word "string" a different substring: ${str2}`);

// trim
const str3 = "     String with extra spaces in the front and back     ";
console.log(`Before trim: ${str3}.`);
console.log(`After trim: ${str3.trim()}.`);

// must know Object
// static
// entries, keys, values
const user = {
  firstName: "Molly",
  lastName: "Member",
  role: "admin",
  jwt: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9",
};

// entries
console.log("Accessing object properties:");
for (const [key, value] of Object.entries(user)) {
  console.log(`The ${key} is ${value}`);
}

// keys
console.log("The user object keys are:");
for (const key of Object.keys(user)) {
  console.log(key);
}

// values
console.log("The user object values are:");
for (const value of Object.values(user)) {
  console.log(value);
}
