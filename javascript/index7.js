console.log("tuition 7");

let marks = [1, 2, 3, 4, 5];
let name = ["amit", "swayam", "swastik", "samal"];
let mixed = ["strfft", 2, [1, 2, 3]];

//we can create an array using new keyword and constructor
let arr = new Array(23, 1, "wdsd", [1, 2, 3]);
console.log(arr);
console.log(arr.length);
console.log(arr[3]);
console.log(Array.isArray("dsddsd"));

arr[0] = "amity";
console.log(arr);
console.log("element 0:", arr[0]);

console.log(arr.indexOf("amity"));

//mutating or changing
arr.push("mc-bsdk"); //puch mean to add an element at the end
console.log(arr);
arr.unshift("ulaaa -ulaaaa -le o"); // pushing the element at the starting of the array

// arr.pop(); // this will delete the element from the last
// arr.shift(); //this will delete the element from the first
console.log(arr);
arr.splice(1, 3);
console.log(arr);
arr.reverse();
console.log(arr);

let mark = [1, 2, 3, 4];
let mark1 = [5, 6, 7, 8];
console.log(mark.concat(mark1));

// objects
let myobj = {
  "fist name": "amit",
  branch: " cse",
  rollno: 2041013212,
  isAcvtive: true,
};
console.log(myobj);
console.log(myobj["fist name"]);
console.log(myobj);
