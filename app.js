const inputBox = document.getElementById("my-input");
const listBox = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listBox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}
listBox.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData()
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData()
    }
}, false);
function saveData() {
    localStorage.setItem("data", listBox.innerHTML);
}
function showData() {
    listBox.innerHTML = localStorage.getItem("data");
}
showData();