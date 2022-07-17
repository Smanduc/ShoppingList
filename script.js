let inputElem = document.getElementById("shopping-input")
let buttonElem = document.getElementById("shopping-button")
let listElem = document.getElementById("shopping-ul")

buttonElem.addEventListener("click", addElementToList)

function addElementToList(){
  let inputValue = inputElem.value
  console.log(inputValue)
  let li = document.createElement("li");
  li.innerText = inputValue;
  listElem.appendChild(li)
}
  