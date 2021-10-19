let x= 10;
const person={
    name:"amit",
    age:x, // setting a variable to property of an object
    married:false,
    greet: function (name) {
        console.log(`heloo  ${name}`);
    },
    ulafunc(namex) {
        console.log(namex);
    },
    // nested object
    job:{
        title:"developer",
        // nested object
        company:{
            name:'codding addict' 
        }
    },
    'random-value':'random'
};
console.log(person.ula); // undefined
// console.log(person.jobx.company.name ); --> error
console.log(person.job);
console.log(person.age);

// what is the difference between using an dot operator and square bracket like this and why i am getting an error if i try person."random-value"
console.log(person["random-value"]);
console.log(person["name"]);