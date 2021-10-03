// let arr =[];
// let n=Number(window.prompt("Enter n"));
// let sum=0;
// for (let i = 0; i < n; i++) {
//     let num=parseInt(Math.random()*10)+1;
//     sum+=num;
//     arr.push(num);
// }
// console.log(`Average of ${arr} is ${sum/n}`);


// let arr=[];
// let num=Number(window.prompt("Enter a number between 1 t0 100"));
// for (; num!==0; ) {
//     arr.push(num);
//     num=Number(window.prompt("Enter a number between 1 t0 100"));
// }
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     let temp=arr[i];
//     let counter=0;
//     for (let j = 0; j < arr.length; j++) {
//         if (temp!==0 && temp===arr[j]) {
//             counter++;
//             arr[j]=0;
//         }
//     }
//     if (temp!==0) {
//         if (counter>1) {
//             console.log(`${temp} occurs for ${counter} times`);
//         }
//         else
//             console.log(`${temp} occurs for ${counter} time`);
//     }
    
// }

// let arr=[];
// for (let i = 0; i < 10; i++) {
//     arr.push(Number(window.prompt("Enter number: ")));
// }
// let min=arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i]<min) {
//         min=arr[i];
//     }
// }
// console.log(`The minimum number is : ${min}`);

// let x =parseInt(window.prompt("Enter a number which u want to convert it into octal: "));
// let output=[];
// for (;x!=0; ) {
//     output.unshift(x%8);
//     x=parseInt(x/8);
// }
// let y="";
// for (let i = 0; i < output.length; i++) {
//     y=y+output[i];
// }
// console.log(y);

// let input= Number(window.prompt("1: Create an array of N integer\n2: Display the array elemnet\n3:Insert an element at a specific position\n4:Delete an element at given position \n 5:Exit"))


// let arr=[1,2,3,4,5,6];
// for (let i = 0; i < 3; i++) {
//     let x=arr.pop();
//     arr.unshift(x);
// }
// console.log(arr);
   