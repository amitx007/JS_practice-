console.log("string properties and method");

let text = " Amit Mohapatra";
// let obj = {
//     name: "amit",
//     x: function greetings() {
//         console.log("hello every one !");
//     }
// };
// obj.x();
// obj.name;
console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
console.log(text.charAt(text.length - 1));
console.log(text.indexOf("i"));
console.log(text.indexOf("u"));
console.log(text);
console.log(text.trim());
console.log(text.startsWith(" amit"));
console.log(text.slice(0,2));
console.log(text.slice(-3));


// template literals
// interpolation --> ${}
console.log(`hello my name is ben ${5*2}`);
