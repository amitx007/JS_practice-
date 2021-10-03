// call back function ,higher order function ,Function as First class object /citizen
// let x = function () {
//   console.log("amit Mohapatra");
// };
// x();

//  function as first class object/citizen - we can store funcction in a variable as an expression we can return a function from a function , or we can pass a function as a parameter in a function
// Higher order function :- accepts another function as a arguement or return another function as a result

// call back functionn -passed to a another as an argurment and executed inside that function

// let name="Amit";
// function printing() {
//     name="asit";
//     console.log(`Hello my name is ${window.name}`);
// }
// printing();

// call back function
// function morning(name) {
//     return `Good Morning ${name.toUpperCase()}`;
// }
// function evening(name) {
//     return `Good eveing ${name.toUpperCase()}`;
// }
// function greet(name, fungreet) {
//     console.log(`${fungreet(name)} welcome home mf.`);
// }
// greet("amit",morning);
// greet("amit",evening);

// Powerfull Array methods
// foreach, map,filter,find,reduce
//Iterate over array - no for loop required
// array iteration

// const numbers = [1, 2, 3, 4, 5];
// for (let index = 0; index < numbers.length; index++) {
//   console.log(numbers[index]);
// }
// for each loop
//  does not return new array
console.log("------------------------------");

// numbers.forEach(printing) ;

// let array = [
//   { Name: "amit", position: "student", regedno: 2041013212 },
//   { Name: "asit", position: "intern", regedno: 2041013111 },
//   { Name: "koyana", position: "student", regedno: 2041013000 },
// ];
// array.forEach(element => {
//   console.log(element);
// });
// array.forEach(printing);
// function printing(num) {
//   console.log(num.position.toUpperCase());
// }
// array.forEach(function (element) {
//   console.log(element);
// });

// Map
// does return a new Array
// does not change size of the original array
//uses the value of the array to create a new one

// const people = [
//   { name: "Amit", Age: 18, position: "intern" },
//   { name: "Koyana", Age: 19, position: "intern" },
//   { name: "Swayam", Age: 20, position: "intern" }
// ];
// const elements = people.map(function (element) {
//     return element.name;
// });
// console.log(elements.join(" "));
// console.log(people);

 
// let young=people.filter(function (person) {
//   return person.Age > 18;
// });
// console.log(young);

// let ula=people.find(function (element) {
//   return element.Age>18 ;
// });
// console.log(ula);

// let number=[1,-1,2,3];
// let totalsum=number.reduce(function (acc,curentvlaue) {
//   return acc+curentvlaue;
// },0);
// console.log();

const number=4  ;
console.log(Math.floor(Math.random()*10)+1);



// Date obj
let date= new Date();
let day= [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let month=[
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(`Giveaway Ends on ${day[date.getDay()]}, ${date.getDate()}, ${month[date.getMonth()]} 2020 by ${date.getHours()}:${date.getMinutes()}`);


