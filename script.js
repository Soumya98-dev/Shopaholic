// ****DELETE A GROCERY LIST****

//*** APPROACH:1 (WITHOUT EVENT BUBBLING)

//***ACCESSING THE DELETE BUTTON*****
// let deleteLi = document.querySelectorAll('.items li .delete');
// console.log(deleteLi);

// deleteLi.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     const LI = e.target.parentElement;
//     // LI.style.display = 'none';
//     LI.parentElement.removeChild(LI);
//   })
// });

//*** APPROACH: 2 (WITH EVENT BUBBLING)

//** ACCESSING THE <ul> tag
let ul = document.querySelector("ul");
// console.log(ul);
ul.addEventListener("click", removeLI);

function removeLI(e) {
  let target = e.target;
  if (target.className === "delete") {
    // console.log(target.parentElement);
    target.parentElement.remove();
  }
}

//*** ACCESSING THE FORM input: middle-context
let inputMiddleContext = document.querySelector(".middle-context input");
// console.log(inputMiddleContext);

//*** ACCESSING THE FORM button: middle-context
let buttonMiddleContext = document.querySelector(".middle-context button");
// console.log(buttonMiddleContext);
buttonMiddleContext.addEventListener("click", (event) => {
  //*** GETTING THE VALUE FROM THE TEXT FIELD
  let text = inputMiddleContext.value;
  //*** CREATING A NEW <li> TAG
  const li = document.createElement("li");
  //*** APPENDING THE NEW <li> TO THE BOTTOM OF THE <ul>
  document.querySelector("ul").appendChild(li);
  //*** CREATING A NEW <span> TAG INSIDE THE <li>
  const newSpan = document.createElement("span");
  li.appendChild(newSpan);
  newSpan.classList.add("item");
  newSpan.innerHTML = text;
  //*** CREATING A NEW BUTTON AFTER THE <span> INSIDE THE NEW <li>
  const newBtn = document.createElement("span");
  li.appendChild(newBtn);
  newBtn.classList.add("delete");
  newBtn.innerHTML = "delete";

  inputMiddleContext.value = "";
  event.preventDefault();
});

//*** HIDE LIST
let itemsContextDiv = document.querySelector(".items-context");
let hideList = document.getElementById("hide");
hideList.addEventListener("change", (event) => {
  if (event.target.checked) {
    itemsContextDiv.style.display = "none";
  } else {
    itemsContextDiv.style.display = "block";
  }
});
