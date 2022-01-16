// console.log("Maps in javaScript: we can use any type of key or value");
let myMap = new Map();
const key1 = "mystr",
  key2 = {},
  key3 = function () {};
// Setting Map value
myMap.set(key1, "This is a string");
myMap.set(key2, "This is a blank obj");
myMap.set(key3, "This is a empty function");
// console.log(myMap);
let value1 = myMap.get(key3);
// console.log(value1);

// Get the size of map
// console.log(myMap.size);

// you can use for..of loop to get keys and values
for (let [keys, value] of myMap) {
  //   console.log(keys, value);
}

// For only keys
for (let key of myMap.keys()) {
  // console.log(key);
}
for (let value of myMap.values()) {
  // console.log(value);
}
// forEach loop
// value first and key is second
myMap.forEach((value, key) => {
  console.log("key is:", key);
  console.log("Value is:", value);
});

// converting Map to an array
let myArray = Array.from(myMap);
console.log('value:',myArray);
let myKeysArray = Array.from(myMap.keys());
console.log('Keys:',myKeysArray);
let myValuesArray = Array.from(myMap.values());
console.log('values:',myValuesArray);