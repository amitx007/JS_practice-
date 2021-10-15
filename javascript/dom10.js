const conatainer = window.document.querySelector(".container");
const list = window.document.querySelector(".list-items");

list.addEventListener('click',function (e) {
    console.log("BY USING ANONYMOUS FUNCTION");
    console.log(e.currentTarget);
    console.log(e.target);
    console.log("------------------------");
});
conatainer.addEventListener('click',function (e) {
    console.log("BY USING ANONYMOUS FUNCTION");
    console.log(e.currentTarget);
    console.log(e.target);
    console.log("------------------------");
});

list.addEventListener('click',showBubling);
conatainer.addEventListener('click',showBubling);
function showBubling(eventobj) {
    console.log("BY USING A FUNCTION");
    console.log( eventobj.currentTarget);
    console.log(eventobj.target);
    console.log("------------------------");
}