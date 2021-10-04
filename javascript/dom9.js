
const btn = window.document.querySelector(".btn");
function changecolor() {
    window.document.querySelector("h1").classList.add("blue");
}
// what is the diffrence between 7 and 8 th line 
btn.addEventListener('click',changecolor);
btn.addEventListener('click',changecolor());