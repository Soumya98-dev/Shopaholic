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
let ul = document.querySelector('ul');
// console.log(ul);
ul.addEventListener('click', removeLI);
function removeLI(e) {
  let target = e.target;
  if (target.className == 'delete') {
    // console.log(target.parentElement);
    target.parentElement.remove();
  }
}
