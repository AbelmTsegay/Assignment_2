const usernameInput = document.getElementById("username")
const saveBtn = document.getElementById("save-btn");
const clearBtn = document.getElementById("clear-btn");
const displayName = document.getElementById("display-name")

function saveName (){
    const name = usernameInput.value;
    if (name) {
        localStorage.setItem("username", name);
        displaySavedName();
    }
}
function displaySavedName() {
    const savedName = localStorage.getItem("username");
    if (savedName) {
        displayName.textContent = `Saved Name: ${savedName}`;
    } else {
        displayName.textContent = "No name has been given"; 
    }
}
function clearName(){
    localStorage.removeItem("username");
    displaySavedName();
    usernameInput="";
}

saveBtn.addEventListener("click", saveName);
clearBtn.addEventListener('click', clearName);

window.onload = displaySavedName; 