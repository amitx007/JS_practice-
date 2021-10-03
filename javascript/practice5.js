// let x= Number(window.prompt("Enter n: "));
// const calc= (x*(x+1)*((2*x)+1))/6;
// console.log(`sum of the square of n numbers ${calc}`);

// let x= Number(window.prompt("Enter n: "));
// let output="";
// let num=1;
// for (let i = 1; i <=x; i++) {
//     output=output+(num)+" ";
//     num*=2;
// }
// console.log(output);

// let x= Number(window.prompt("Enter n: "));
// let output= "";
// for (let i = 1; i <= x; i++) {
//     output=output+Math.pow(-1,i+1)+" ";
// }
// console.log(output);

// factorial
// let x= Number(window.prompt("Enter n : "));
// let fact=1;
// for (let i = 2; i <= x; i++) {
//     fact*=i;
// }
// console.log(`factorial of x is ${fact}`);

// let x= Number(window.prompt("Enter n: "));
// let sum=1;
// let output="0! ";
// for (let i = 1; i <=x; i++){
//     let fact=1
//    for (let j = 2; j <= i; j++) {
//        fact*=j;
//    } 
//    sum+=fact;
//    output = output+`+ ${i}! `;
// }
// console.log(`${output} = ${sum} (n>=0)`);

// lucas series
// let n= Number(window.prompt("Enter n: "));
// let x=1;
// let y=3;
// let output="";
// if (n===1) {
//     output=output+`${x}`
// }
// else if(n===2){
//     output=output+`${x} ${y}`;
// }
// else{
//     output=output+`${x} ${y} `
//     for (let i =3; i <= n; i++){
//         let temp=y;
//         y=x+y;
//         x=temp;
//         output=output+`${y} `;
//     }
// }
// console.log(output);

// let n= Number(window.prompt("ENter n: "));
// let output="";
// for (; n!=0; ) {
//     output=" "+(n%10)+output
//     n=parseInt(n/10);
// }
// console.log(output);


// -------------------------------------------------------------------------
// let x=Number(window.prompt("Enter x: "));
// let y=Number(window.prompt("Enter y: "));
// let method=Number(window.prompt("Simple addition : 1\nSimple subtraction : 2\nSimple Multiplication: 3\nSimple division: 4"));

// switch (method) {
//     case 1:
//         console.log(`${x} + ${y} = ${addition(x,y)}`);
//         break;
//     case 2:
//         console.log(`${x} - ${y} = ${subtraction(x,y)}`);
//         break;
//     case 3:
//         console.log(`${x} * ${y} = ${multiplication(x,y)}`);
//         break;
//     case 4:
//         let ans=division(x,y);
//         if (typeof ans=== 'String') {
//             console.log(ans);
//         }
//         else{
//             console.log(`${x} / ${y} = ${division(x.y)}`);
//         }
//         break;

//     default:
//         console.log("Wrong choice bro.");
//         break;
// }
// function addition(x,y) {
//     return x+y;
// }
// function subtraction(x,y) {
//     return x-y;
// }
// function multiplication(x,y) {
//     return x*y;
// }
// function division(x,y) {
//     if (y===0) {
//         return "y=0 can't divide"
//     }
//     else{
//         return parseInt(x/y);
//     }   
// }
// -------------------------------------------------------------------------

// let x=Number(window.prompt("Enter number: "));
// let dup=x;
// let y=0;
// for (;dup!=0; ) {
//     y=(y*10)+(dup%10);
//     dup=parseInt(dup/10);
// }
// console.log(`original number : ${x} reversed number ${y} So its ${x===y?"a palindrome":"not a palindrome"}`);

// for (let i = 2000; i <= 2020; i++) {
//     isLeap(i);
// }

// function isLeap(year) {
//     if ((year%4===0 && year%100 !==0) || (year%400===0)) {
//         console.log(`{${year} :: 366}`);
//     }
//     else{
//         console.log(`{${year} :: 365}`);
//     }
// }

// let number=Number(window.prompt("Enter n"));
// if (number===1) {
//     console.log(`1 is neither prime nor a composite`);
// }
// else
//     console.log(`${number} is ${isPrime(number)?"a prime number":"not a prime number"}`);
// function isPrime(number) {
//     for (let i = 2; i<=Math.sqrt(number); i++) {
//         if (number%i===0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = 1; i <= 2000; i++) {
//     if (i===1) 
//         console.log(`1 is neither prime nor a composite`);
//     else
//         console.log(`${i} is ${isPrime(i)?"a prime number":"not a prime number"}`);

// }
// function isPrime(number) {
//     for (let i = 2; i<=Math.sqrt(number); i++) {
//         if (number%i===0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = 2; i < 1000; i++) {
//     if (isPrime(i) && isPalindrome(i)) {
//         console.log(i);
//     }

// }
// function isPrime(number) {
//     for (let i = 2; i<=Math.sqrt(number); i++) {
//         if (number%i===0) {
//             return false;
//         }
//     }
//     return true;
// }
// function isPalindrome(number) {
//     let dup=number;
//     let reverse=0;
//     for (; dup!=0;) {
//         reverse=reverse*10+(dup%10);
//         dup=parseInt(dup/10);
//     }
//     if (number===reverse) {
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// let counter=0;
// let output="";
// let x=0;
// let y=0;
// for (let i = 2; i <= 100; i++) {
//     if (isPrime(i)) {
//         if (counter<1) {
//             output=output+i+" , ";
//             x=i
//         }
//         else{
//             output=output+i
//             y=i;
//         }
//         counter++;
//     }
//     if (counter===2) {
//         if ((y-x)===2) {
//             console.log(`(${output})`);
//         }
//         counter=0;
//         output="";
//         i--;
//     }
// }
// function isPrime(number) {
//     for (let i = 2; i<=Math.sqrt(number); i++) {
//         if (number%i===0) {
//             return false;
//         }
//     }
//     return true;
// }

// password

// let password=window.prompt("Enter your password to check : ");
// check(password)
// function check(password) {
//     let flag1 =password.length>=8?true:false;
//     let flag2=lengtht(password)
    
//     function lengtht(password) {
//         let total=true;
//         for (let i = 0; i < password.length; i++) {
//             if ((password.charCodeAt(i)>=48 && password.charCodeAt(i)<=57) || (password.charCodeAt(i)>=65 && password.charCodeAt(i)<=90) || (password.charCodeAt(i)>=97 && password.charCodeAt(i)<=122)) {
//                 total &&=true;
//             }
//             else{
//                 total &&=false;
//             }
//         }
//         return total;
//     }
//     let flag3=digit(password)
    
//     function digit(password) {
//         let counter=0;
//         for (let i = 0; i < password.length; i++) {
//             if (1<=parseInt(password.charAt(i))<=9) {
//                 counter++;
//             }
//         }
//         if (counter>=2) {
//             return true;
//         }
//         else{
//             return false;
//         }
//     }
//     if (flag1&flag2&flag3) {
//         console.log("valid password");
//     }
//     else{
//         console.log("invalid password");
//     }
// }

