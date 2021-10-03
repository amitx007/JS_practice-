console.dir(document);
const first = window.document.querySelectorAll(".first");
const classa=first[0].getAttribute('class');
console.log(first[0].getAttribute('id'));

const link =document.getElementById("link");
console.log(link.textContent);
console.log(link.getAttribute("href"));

link.nextElementSibling.setAttribute("class","amit");
link.nextElementSibling.textContent="amit is a good boy";
console.log(document.getElementsByClassName("amit")[0].textContent);
console.log(link.nextElementSibling.getAttribute("class"));

 
 
 
// link= document.querySelectorAll('.first');