console.log("this is tut 6");
const namex = "Amit";
const gretting = "Good Morning ";
console.log(gretting + namex);

let html;
html = "<h1> this is a heading </h1> <p> this is a para </p>";

let x = "amit";

x = x.concat("asit", "ulaa"); // cocatinate the words
console.log(x);
console.log(x.length); //length of the string
// x = x.toUpperCase(); // converting to upper case
console.log(x);
console.log(x.toLowerCase()); //converting to lower case
console.log(x[0]); // index of the string
let index = x.indexOf("ASIT");
console.log(index);
console.log(x.lastIndexOf("a")); //this will consider the index of of the last a
console.log(x.endsWith("laa")); // this will give a boolean vakue if the part is present at last or not
console.log(x.includes("mit")); // this will give a boolean value wheather that string is inside the the whole string or not

console.log(x.substring(0, 3)); // this will give the character from 0 to 2 (0,1,2)
console.log(x.substring(-2)); //if we put any ANY negative number in substring method then it will print all the charcters in the string i mean the whole string will be the output

console.log(x.slice(0, 3));

let x1 = html.split(" ");
console.log(x1.length);

console.log(x.replace("amit", "gudu")); //this will replace the first word not the last

let nam = "amit";
let fruit1 = "peaches";
let fruit2 = "apple";
let myhtml=`
hello ${nam}
<h1> this is heading </h1> 
<p> u like ${fruit1} and 
${fruit2}   `
console.log(myhtml);
document.body.innerHTML=myhtml;
