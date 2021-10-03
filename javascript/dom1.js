// console.log(document);
// console log o document will print the html dcoument 
//  but console dir will print the all the methods and properties of the document

// console.dir(document);
// console.log(typeof window.document);

// get element by id('element')   

// const h1= document.getElementById('Title');
// h1.style.color="red";

// get element by tag name
// returns node-list == array-like object 
//we can use index , length property but not array methods 

// get element by tag name 
// const heading= window.document.getElementsByTagName('h1');
// console.log(heading);
// heading[0].style.color="#2138";
// console.log(heading.length);

// properties
// let list= window.document.getElementsByTagName("li");
// list.foreach(function (element) {
//     console.log(element);   
// })  

// let betterarray=[...list];

// betterarray.forEach(function (items) {
//     console.log(items);
// })
// console.log("-------------------");
// for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
// }

// get elements by class name 
//syntax --> getelementByClassName("classname")
// it will also give a node list == array like object 
// index , length property , but not array methods
// window.document.getElementsByClassName()

// query selector && query all selector

const listelement=document.querySelector("#list");
listelement.style.backgroundColor="blue";

const lastname= document.querySelector("li:last-child");
lastname.style.color="Yellow";
const items=document.querySelectorAll(".special");

// items.forEach(function (elements) {
//     console.log(elements);
//     elements.style.color="white";
// })