//type conversion and coercion
let myvar=String(34);
console.log(myvar, typeof(myvar));

let boolean_var=Number(false);
console.log(boolean_var,typeof(boolean_var));
// false-->0
// true-->1

let date= String(new Date());
console.log(date,typeof(date));

let arr=String([1,2,3,4,5]);
console.log(arr,typeof(arr));

//tostring method
let numbss=10;
console.log(numbss.toString());

//string to numbers
let stri=Number("amit");
console.log(stri); 

let number=parseInt("122.2");
console.log(number.toFixed(5),typeof(number));