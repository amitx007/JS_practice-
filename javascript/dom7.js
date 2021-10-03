// className
// classList

const first = window.document.querySelector("#_1");
const second = window.document.querySelector("#_2");
const third = window.document.querySelector("#_3");
console.log(`${first.getAttribute("class")} using get attribute`);
console.log(`${first.className} using className property`);
first.className="text colors";

second.className="colors";
third.className="text";
third.classList.add("colors");
third.classList.remove("text");
let res=third.classList.contains("text");
console.log(res);
console.table({name:"amit",year:1,branch: "cse"})
console.log("amiy".includes("mi"));
