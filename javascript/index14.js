// // Array properties and Methods
// let names = ["amit", "asit", "ulaa", "gulaaa"];

// // length
// console.log(names.length);

// // accessing
// console.log(names[names.length]); // undefined
// console.log(names[3]);

// // concat --> by using concat we can combine 2 arrays it will return a new array without modifying the existing array
// names = names.concat([1, 2, 3, 4]);
// console.log(names);

// // reverse --> it will reverse the array this will not return as new array rather it will modify the array
// // names.reverse();
// // console.log(names);

// // unshift --> this will add the element in first of the array i.e in index no -0
// names.unshift("bhosidike");
// console.log(names);

// // shift --> this will delete the element in first index i.e 0 of the array
// names.shift();
// console.log(names);
// names.shift();
// console.log(names);

// //push --> adding elemnet to the end of the array
// console.log(names.push("jbxsjbxsux"));
// console.log(names);

// // pop -->  removing element from the end of the array
// names.pop();
// console.log(names);
// console.log(names.pop());
// console.log(names);

// // splice ---> mutates original array its used to get specific items fom array 

// names.splice(1,3);
// console.log(names);

//exercise-1

// const names=["Anna","sussy","bob"];
// const lastname="shakesman";
// let newarray=[];
// for (let index = 0; index < names.length; index++) {
//     newarray.push(`${names[index]} ${lastname}`)
    
// }
// console.log(newarray);

// //exercise-2

// let gas=[20,40,100];
// let food=[10,40,50];
// function calculate(gas,food) {
//     gassum=0;
//     foodsum=0;
//     for (let index = 0; index < gas.length; index++) {
//        gassum+=gas[index];
        
//     }
//     for (let index = 0; index < food.length; index++) {
//        foodsum+=food[index];
        
//     }
//     console.log(`Total gas sum is $${gassum} and total food sum is $${foodsum}`);
//     return foodsum+gassum
// }
// console.log(`In Total food+gas = $${calculate(gas,food)}`);
 

// values and references 
// when assigning primitive data type value to a variable any changes are made directly to  that value ,without affecting original value


//when assigning non-primitive data type value to a variable is done byt reference so any changes will affect the references 

// let number=1;
// let number2=number;
// number2="amit" //change 
// console.log(`number1 ${number} and number2 ${number2}`);

// let x="amittttt";
// let y=x;
// y="ula"
// console.log(`x: ${x} and y: ${y}`);

// let obj={
//     name:"amit"
// }

// let obj2={name:obj.name};
// obj2.name="asit" ; //changing in both 
// console.log(`obj1 name: ${obj.name} and obj2 name: ${obj2.name1}`); 

// global scope
// let  name1="amit";
// function namechange() {
//     console.log(name1);
//     name1="amuhy";
//     function nestedfun() {
//         name1="ula"; 
//     }
//     nestedfun();

// }

// namechange();
// console.log(name1);

// local scope
amit="uilosm";
let name="bob";
function calculate() {
    const name="amiut";
    console.log();
    globalx="orange";
}
calculate();
// console.log(globalx);
// console.log(amit    );

// console.log(`My name is ${name} and i am awesome `);