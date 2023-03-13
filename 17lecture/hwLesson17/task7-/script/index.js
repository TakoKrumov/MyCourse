let inputAndSubmit = document.getElementById("inputAndSubmit");
let inputGroceries = document.createElement("input");
inputAndSubmit.appendChild(inputGroceries);
let submitGroceries = document.createElement("button");
inputAndSubmit.appendChild(submitGroceries);
let list = document.getElementById("groceryList");

submitGroceries.type = "submit";
submitGroceries.textContent = "Submit To List";

submitGroceries.addEventListener("click", updateList);

function updateList() {
  let infoUpdate = inputGroceries.value;
  if (infoUpdate.length !== 0) {

    let container = document.createElement("div");
    list.appendChild(container);
    container.style.display = "flex";
    container.className = 'container';
    container.style.alignItems = "center";
    container.style.marginBottom = "10px";

    let newGroceryProduct = document.createElement("li");
    container.appendChild(newGroceryProduct);
    newGroceryProduct.textContent = inputGroceries.value;
    inputGroceries.value = ``;

    let xButton = document.createElement("button");
    container.appendChild(xButton);
    xButton.textContent = "X";
    xButton.style.cursor = "pointer";
    xButton.style.marginLeft = "auto";

    newGroceryProduct.addEventListener("click", getLined);
    function getLined() {
      newGroceryProduct.style.textDecoration =
        newGroceryProduct.style.textDecoration === "line-through"
          ? "none"
          : "line-through";
    } 
    
    let buttonForDelete = document.getElementsByClassName('container');
    for (let i=0; i<buttonForDelete.length; i++) {
      xButton.addEventListener('click',deleteListLine);
        function deleteListLine(e) {
            e.target.parentNode.remove();
        }
    }
  }
}




    
