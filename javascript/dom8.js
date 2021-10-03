let divbox=window.document.createElement("div");
let heading=window.document.createElement("h1");
heading.className="blue";
let text = document.createTextNode("hiiii !");
// this one is working 
heading.appendChild(text);
divbox.appendChild(heading);
document.body.appendChild(divbox);

// this one is also working 
heading.appendChild(text)
document.body.appendChild(divbox.appendChild(heading));

// this one is not working ??
document.body.appendChild(divbox.appendChild(heading.appendChild(text)));