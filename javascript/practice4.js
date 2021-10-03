// let countFrom=parseInt(window.prompt("Count from: "));
// let countto=parseInt(window.prompt("Count to: "));
// let countby=parseInt(window.prompt("count by: "));
// for (let i = countFrom; i <= countto; i+=countby) {
//     console.log(i);
// }

// let n= parseInt(window.prompt("Enter n: "));
// let sum=0;
// for (let i = 0; i < n; i++) {
//     let num= Math.random();
//     console.log(`Random no ${i+1} : ${num}`);
//     sum+=num;
// }
// console.log(`Average is : ${sum/n}`);

// let num="";
// for (let i = 1; i <= 5; i++) {
//     num=num+i+num;
//     console.log(num);
// }

// let out1="The sum of the squares of the first ten natural numbers is: ";
// let sum=0;
// for (let i = 1; i <10; i++) {
//     out1=out1+i+"^2 + ";
//     sum+=Math.pow(i,2);
// }
// sum+=Math.pow(10,2);
// out1=out1+"10 ^2 = "+sum;
// console.log(out1);

// let out2="The square of the sum of the first ten natural numbers is: ( ";
// let sum2=0;
// for (let i = 1; i < 10; i++) {
//     sum2+=i;
//     out2=out2+i+" + ";
// }
// out2=out2+10+")^2 = "+Math.pow(sum2+10,2);
// console.log(out2);


// let n= parseInt(window.prompt("Enter n: "));
// let dup=n;
// let sum=0;
// let out="";
// for (; parseInt(n/10)!= 0; ) {
//     let x=n%10;
//     out=out+x+" + ";
//     sum+=x;
//     n=parseInt(n/10);
// }
// sum+=n%10;
// out=out+n%10+" = "+sum
// console.log(out);
// if (sum%9==0) {
//     console.log(`${dup} is divisible by 9`);
// }
// else{
//     console.log(`${dup} is not divsible by 9`);
// }

// let row=1;
// let output="";
// for (let i = 1; i <= row && row<=5;) {
//     if (i==row) {
//         output=output+"* \n";
//         row++;
//         i=1;
//     }
//     else{
//         output=output+"*";
//         i++;
//     }
// }
// console.log(output);

// let row=1;
// let output="";
// for (let i = 1; i <= row && row<=5;) {
//     if (i===row) {
//         output=output+i+" \n";
//         row++;
//         i=1;
//     }
//     else{
//         output=output+i+" ";
//         i++;
//     }
// }
// console.log(output);

// let row=1;
// let output="";
// for (let col = 1; col <= row && row<= 5;) {
//     if (col===row) {
//         output=output+row+" \n";
//         row++;
//         col=1;
//     }
//     else{
//         output=output+row+" ";
//         col++;
//     }
// }
// console.log(output);

// let row=1;
// let num=1;
// let output="";
// for (let i = 1; i <= row && row<=5; num++) {

//     if (i===row) {
//         output=output+num+"\n";
//         row++;
//         i=1;
//     }
//     else{
//         output=output+num+" ";
//         i++;
//     }
// }
// console.log(output);
// console.log("amioygg");

// let output=""
// let i=1;
// for (let j = 1; j <= 10 && i<=10; j++) {
//     if (i%j===0 || j%i===0) {
//         output+="* ";
//     }
//     else{
//         output+="  ";
//     }
//     if (j===10) 
//     {
//         output=output+i+"\n";
//         i++;
//         j=0;    
//     }
// }
// console.log(output);

// let positive=0;
// let negative=0;
// let sum=0;
// while (true) {
//     let x=parseInt(window.prompt("Enter an integer , the input ends if its 0: "));
//     if (x===0) {
//        break; 
//     }
//     if (x<0) {
//         negative++;
//     }
//     else{
//         positive++;
//     }
//     sum+=x;
// }
// console.log(`The number of positive: ${positive}`);
// console.log(`The number of negative: ${negative}`);
// console.log(`total: ${sum}`);
// console.log(`Average: ${sum/(negative+positive)}`);

// let n= parseInt(window.prompt("Enter n"));
// let output="1";
// let num =3;
// let sum=1;
// for (var i = 2; i <= n; i++) {
//     if (i%2===0) {
//         output=output+" - "+num;
//         sum-=num;
//     }
//     else{
//         output=output+" + "+num;
//         sum+=num;
//     }
//     num+=2;
// }
// output=output+" = "+sum;
// console.log(output);

// let n =parseInt(window.prompt("Enter n : "));
// let x=0;
// let y=1;
// let output="0 , 1";
// for (let index = 3; index <=n; index++) {
//     output=output+" , "+(x+y);
//     let temp=x;
//     x=y;
//     y=temp+y;
// }
// console.log(output);

// element 