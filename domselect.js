// var h1 = document.querySelector("h1");
// h1.className = "newClassName";
// document.querySelector("li").classList.add("done");

var button = document.getElementById("enter");
var input = document.getElementById("inputitem");
var unrdrdlist = document.getElementById("testlist");
function checkInputValue() {
    return input.value.length;
}
function createLiItem()
{
    var listitem = document.createElement("li");
    listitem.appendChild(document.createTextNode(input.value));
    unrdrdlist.appendChild(listitem);
    input.value = "";
}
function addListAfterClick()
{
    if (checkInputValue() > 0) {
        createLiItem();
    }
}
function addAfterKeypress(event)
{
    if (checkInputValue() > 0 && event.keyCode === 13) {
        createLiItem();
    }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addAfterKeypress);