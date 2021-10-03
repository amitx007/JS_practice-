// functions
 
function greet(name,thanks){
    console.log(`${name} wish u a very happy bday ${thanks}`);
}

greet("Amit");
let x=10;
function greet(name,thanks){
    var i=10;
    console.log(`${name} wish u a very happy bday ${thanks}`);
}
// console.log(i);
greet("Amit");

// let v/s var

// function fun1(){
//     for (let index = 0; index < 5; index++) {
//         console.log(index);
//     }
//     console.log(index);
// }
// fun1();
function fun2(){
    for (var index = 0; index < 5; index++) {
        console.log(index);
    }
    console.log(index);
}
fun2();