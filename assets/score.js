var userArray = JSON.parse(localStorage.getItem("userList")) || [];
var html = ""

for (var i = 0; i < userArray.length; i++) {
    html += `<li>${userArray[i].user} score: ${userArray[i].score}</li>`
    
}
var element = document.getElementById("scoreList");
element.innerHTML = html

console.log(userArray)

function clearUser() {
    localStorage.removeItem("userList");
    console.log("userList")
    element.innerHTML = ""
}