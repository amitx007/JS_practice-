// let celcius=parseFloat(window.prompt("Enter a degree in celcius: "));
// const calc=(9/5)*celcius+32;
// console.log(`${celcius} Celcius is ${calc} Fahrenhite.`);


// Q2
// let radius=parseFloat(window.prompt("Enter the radius: "));
// let length=parseFloat(window.prompt("Enter the length: "));
// const area=Math.PI*Math.pow(radius,2);
// const volume=area*length;
// console.log(`The area of the cylinder: ${area.toFixed(4)}`);
// console.log(`The volume of the cylinder: ${volume.toFixed(4)}`);

// Q3
// let foot=parseFloat(window.prompt("Enter the lengh in foot: "));
// let meter=0.305*foot;
// console.log(`${foot} feet is ${meter.toFixed(4)} meters`);

//Q4
// let number= parseInt(window.prompt("Enter a number between 0 - 1000"));
// if (number>1000 || number<0) {
//     console.log("Sorry wrong no entered.");
// }
// else{
//     let output=0;
//     for (; number!=0;) {
//         output+=number%10;
//         number=parseInt(number/10);
//     }
//     console.log(output);
// }

// Q5
// let v1=parseFloat(window.prompt("Enter the v1"));
// let v2=parseFloat(window.prompt("Enter the v2"));
// let t=parseFloat(window.prompt("Enter the time"));
// let avgaccl=((v2-v1)/t).toFixed(4);
// console.log(`The average acceleration is ${avgaccl}`);

// q6
// let weight=parseFloat(window.prompt("Enter weight in pounds: "));
// let height=parseFloat(window.prompt("Enter height in inches: "));
// weight*=0.45359237 ;
// height*=0.0254  ;
// let bmi=weight/height;
// console.log(`BMI is ${bmi}`);

//q7
// let side=parseFloat(window.prompt("Enter the side: "));
// console.log(`The area of the hexagon is ${((3*Math.sqrt(3)*Math.pow(side,2))/2).toFixed(4)}`);
// console.log(`a      b      pow(a,b)`);
// for (let i = 1; i <=5; i++) {
//     console.log(`${i}      ${i+1}      ${Math.pow(i,i+1)}`);
    
// }

// Q9
// let x1 =parseFloat(prompt("Enter the x1: "));
// let y1 =parseFloat(window.prompt("Enter the y1: "));
// let x2 =parseFloat(window.prompt("Enter the x2: "));
// let y2 =parseFloat(window.prompt("Enter the y2: "));


// console.log(`The distance between the two point is ${Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))}`);

// Q10
// let x1=parseFloat(window.prompt("Enter the x1: "));
// let y1=parseFloat(window.prompt("Enter the y1: "));
// let x2=parseFloat(window.prompt("Enter the x2: "));
// let y2=parseFloat(window.prompt("Enter the y2: "));
// let x3=parseFloat(window.prompt("Enter the x3: "));
// let y3=parseFloat(window.prompt("Enter the y3: "));

// let side1=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
// let side2=Math.sqrt(Math.pow(x3-x2,2)+Math.pow(y3-y2,2));
// let side3=Math.sqrt(Math.pow(x3-x1,2)+Math.pow(y3-y1,2));

// let s=(side1+side2+side3)/3;
// let area=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
// console.log(`the area of the triangle is ${area}`);

console.log(1<2<3);
console.log(Math.min(1,2,33,4,-1));;