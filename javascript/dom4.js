// previousSibling & nextSibling
const first = window.document.querySelector(".first");
console.log(first);
const secnd = first.nextSibling.nextSibling;
secnd.style.color = "red";
console.log(first.previousSibling); 

// previousElementSibling & nextElementSibling
first.nextElementSibling.nextElementSibling.style.border= "2px solid red";
console.log(first.nextElementSibling);