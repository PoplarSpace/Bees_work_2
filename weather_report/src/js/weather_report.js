let newDiv = document.createElement("div");
let myDiv = document.getElementById("myDiv");
let button = document.getElementsByTagName("button");
let input = document.getElementById("shuRu");
var content = input.value;
myDiv.style.display = "flex"

function change(newDiv) {
    var content = input.value;
    // newDiv.style.width = "100px";
    //newDiv.style.height = "100px";
    newDiv.style.marginBotton = "10px"
    newDiv.style.backgroundColor = "red";
    newDiv.style.marginRight = "10px"
    newDiv.innerText = content;
    newDiv.style.textAlign = "center"
    newDiv.style.fontSize = "smaller"
}
button[0].onclick = function() {
    if (!input.value) {
        alert("请输入!!!");
    } else {
        let newDiv = document.createElement("div");
        myDiv.insertBefore(newDiv, myDiv.firstChild);
        change(newDiv);
        input.value = "";
    }
}
button[1].onclick = function() {
    if (!input.value) {
        alert("请输入!!!");
    } else {
        let newDiv = document.createElement("div");
        myDiv.appendChild(newDiv);
        change(newDiv);
        input.value = "";
    }
}
button[2].onclick = function() {
    myDiv.removeChild(myDiv.firstChild);
}
button[3].onclick = function() {
    myDiv.removeChild(myDiv.lastChild);
}