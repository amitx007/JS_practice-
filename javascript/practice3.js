// cramer's rule 
/**
 * ax+ by= e
 * cx+ dy= f
 * 
 * x=(ed-bf)/(ad-bc)
 * y=(af-ec)/ad-bc
 */

// let a = parseFloat(window.prompt("Enter a"));
// let b = parseFloat(window.prompt("Enter b"));
// let c = parseFloat(window.prompt("Enter c"));
// let d = parseFloat(window.prompt("Enter d"));
// let e = parseFloat(window.prompt("Enter e"));
// let f = parseFloat(window.prompt("Enter f"));
// console.log(`Equation 1 ${a}x + ${b}y = ${e}`);
// console.log(`Equation 2 ${c}x + ${d}y = ${f}`);

// if ((a*d)-(b*c)!== 0) {
//     const x=((e*d)-(b*f))/((a*d)-(b*c));
//     const y=((a*f)-(e*c))/((a*d)-(b*c));
//     console.log(`x is ${x} and y is ${y}`);
// }
// else{
//     console.log(`The equation has no solution.`);
// }

// let x=parseFloat(window.prompt("Enter x coordinate: "));
// let y=parseFloat(window.prompt("Enter y coordinate: "));

// if (x===0) {
//     console.log(`(${x} , ${y}) is on y-axis.`);
// }
// else if(y===0){
//     console.log(`(${x} , ${y}) is on x-axis.`);
// }
// else{
//     if (x>0 && y>0) {
//         console.log(`(${x} , ${y}) is on quadrant I.`);
//     }
//     else if(x<0 && y>0){
//         console.log(`(${x} , ${y}) is on quadrant II.`);
//     }
//     else if(x<0 && y<0){
//         console.log(`(${x} , ${y}) is on quadrant III.`);
//     }
//     else{
//         console.log(`(${x} , ${y}) is on quadrant IV.`);
//     }
// }

// let rahul=parseInt(window.prompt("Rahul enter your age : "));
// let Ajay=parseInt(window.prompt("Ajay enter your age : "));
// let Ayush=parseInt(window.prompt("Ayush enter your age : "));
// if (rahul> Ajay && rahul > Ayush) {
//     console.log("Rahul is the eldest among them.");
// }
// else if(Ajay>rahul && Ajay>Ayush){
//     console.log("Ajay is the eldest among them.");
// }
// else{
//     console.log("Ayush is the eldest among them.");
// }

// const random= parseInt(Math.random()*10)+1
// console.log(random);

// switch (random) {
//     case 1:
//         console.log("its January");
//         break;
//     case 2:
//         console.log("its February");
//         break;
//     case 3:
//         console.log("its march");
//         break;
//     case 4:
//         console.log("its april");
//         break;
//     case 5:
//         console.log("its may");
//         break;
//     case 6:
//         console.log("its june");
//         break;
//     case 7:
//         console.log("its July");
//         break;
//     case 8:
//         console.log("its august");
//         break;
//     case 9:
//         console.log("its september");
//         break;
//     case 10:
//         console.log("its october");
//         break;
//     case 11:
//         console.log("its november");
//         break;
//     case 12:
//         console.log("its december");
//         break;

//     default:
//         console.log("error");
//         break;
// }

// let day=parseInt(window.prompt("Enter today's day: "));
// let elapsedday=parseInt(window.prompt("Enter the number of days elapsed since today: "));
// switch (day) {
//     case 0:
//         console.log("Today is Sunday and ");
//         break;
//     case 1:
//         console.log("Today is Monday and ");
//         break;
//     case 2:
//         console.log("Today is Tuesday and ");
//         break;
//     case 3:
//         console.log("Today is wednesday and ");
//         break;
//     case 4:
//         console.log("Today is thursday and ");
//         break;
//     case 5:
//         console.log("Today is friday and ");
//         break;
//     case 6:
//         console.log("Today is saturday and ");
//         break;

//     default:
//         console.log("ERROR");
//         break;
// }
// elapsedday=(elapsedday+day)%7;
// switch (elapsedday) {
//     case 0:
//         console.log("the future day is Sunday and ");
//         break;
//     case 1:
//         console.log("the future day is Monday and ");
//         break;
//     case 2:
//         console.log("the future day is Tuesday and ");
//         break;
//     case 3:
//         console.log("the future day is wednesday and ");
//         break;
//     case 4:
//         console.log("the future day is thursday and ");
//         break;
//     case 5:
//         console.log("the future day is friday and ");
//         break;
//     case 6:
//         console.log("the future day is saturday and ");
//         break;

//     default:
//         console.log("ERROR");
//         break;
// }

// let weight = parseFloat(window.prompt("Enter your weight : "));
// let height = parseFloat(window.prompt("enter the height : "));
// height=height*height;
// let bmi= weight/height;
// if (bmi<18.5) {
//     console.log("underweight");
// }
// else if(bmi>=18.5 && bmi<25){
//     console.log("normal weight");
// }
// else if(bmi>=25 && bmi<29){
//     console.log("overweight");
// }
// else{
//     console.log("obese");
// }

// let x= parseInt(window.prompt("Enter x"));
// let y= parseInt(window.prompt("Enter y"));
// let z= parseInt(window.prompt("Enter z"));
// let max=Math.max(x,y,z);
// let min=Math.min(x,y,z);
// console.log(`${min},${(x+y+z)-(max+min)},${max}`);


// let user =parseInt(window.prompt(`Scissor (0) , rock (1), paper (2): `));
// let comp=Math.ceil(Math.random()*3);  
// switch (user) {
//     case 0:
//         if (comp===0) {
//             console.log("user choosed scissor and comp choosed scissor so its a tie.");
//         }
//         else if (comp===1) {
//             console.log("user choosed scissor and comp choosed rock so computer won.");
//         }
//         else if (comp===2) {
//             console.log("user choosed scissor and comp choosed paper so user won.");
//         }
//         break;
//     case 1:
//         if (comp===0) {
//             console.log("user choosed rock and comp choosed scissor so user won.");
//         }
//         else if (comp===1) {
//             console.log("user choosed rock and comp also choosed rock so its a tie.");
//         }
//         else if (comp===2) {
//             console.log("user choosed rock and comp choosed paper socomputer won");
//         }
//         break;
//     case 2:
        
//         if (comp===0) {
//             console.log("user choosed paper and comp choosed scissor so computer won.");
//         }
//         else if (comp===1) {
//             console.log("user choosed paper and comp choosed rock so user won.");
//         }
//         else if (comp===2) {
//             console.log("user choosed paper and comp choosed paper so user won");
//         }
//         break;

//     default:
//         break;
// }

// let x= parseFloat(window.prompt("Enter x coordinate: "));
// let y= parseFloat(window.prompt("Enter y coordinate: "));
// let distance=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
// if (distance<10) {
//     console.log(`point (${x},${y}) is inside the circle.`);
// }
// else if(distance===10){
//     console.log(`point (${x},${y}) is on the circle.`);
// }
// else{
//     console.log(`point (${x},${y}) is outside of the circle.`);
// }

// let gender= window.prompt("What is your gender (M of F) : ");
// gender=gender.toLowerCase();
// let firstName=window.prompt("First name: ");
// let lastName=window.prompt("Last name: ");
// let age = parseInt(window.prompt("What is your age: "));
// let married;
// if (gender==='f') {
//     if (age>=20) {
//         married=window.prompt(`Are you married ${firstName} (y or n)?`).toLowerCase();
//         if (married==='y') {
//             console.log(`Then i shall call you Mrs ${firstName} ${lastName}`);
//         }
//         else{
//             console.log(`Then i shall call you Ms ${firstName} ${lastName}`);
//         }
//     }
//     else{
//         console.log(`Then i shall call you ${firstName} ${lastName}`);
//     }
// }
// else{
//     if (age>=20) {
//         console.log(`Then i shall call you Mr ${firstName} ${lastName}`);
//     }
//     else{
//         console.log(`Then i shall call you  ${firstName} ${lastName}`);
//     }
// }

