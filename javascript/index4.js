//premitive datatypes

//string
var namez = "amit";
console.log("my name is " + namez);
console.log("my datatpe is " + typeof(namez));

// Numbers
let mark=10;
console.log("this is a number "+mark);
console.log("Datatype: "+typeof(mark));

//boolean
let istrue=true;
console.log("IS it true: "+istrue);
console.log("Datatype : "+typeof(istrue));

//null
let varx=null;
console.log("This is null : "+varx);
console.log("Datatype : "+typeof(varx));

//undefined
let x=undefined;
console.log("This is : "+x);
console.log("Datatype: "+typeof(x));


// reference datatype

//array
let arr=[1,2,3,4,5,"amit",false,12.3];
console.log("the array is : "+arr);
console.log("Datatype: "+typeof(arr));

//Object literals
let stMark={
    amit: 10,
    asit: 20,
    apmit: 30,
}
console.log(stMark);
console.log(typeof(stMark));

//function
function namex() {
    
}
console.log(typeof(namex));

let date= new Date();
console.log(typeof(date));
