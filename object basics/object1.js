const person={
    name:"amit",
    age:20,
    married:false,
    greet: function (name) {
        console.log(`heloo  ${name}`);
    },
    ulafunc(namex) {
        console.log(namex);
    }
};
console.log(person);
person.greet("amit");
person.ulafunc("asishj");

person.age=60;
console.log(person.age);
person.city ="ny";
console.log(delete(person.city));
