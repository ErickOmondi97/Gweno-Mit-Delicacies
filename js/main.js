//VARIABLES
let menu_sec =document.getElementById("menu_sec");
let left_arrow = document.getElementById("left_arrow");
let right_arrow = document.getElementById("right_arrow");

right_arrow.addEventListener('click', () => {
  menu_sec.scrollLeft += 115;

  if(menu_sec.scrollLeft > 115) {
    right_arrow.style.visibility = "hidden";
    console.log("yes, it works")
  }
})

left_arrow.addEventListener('click', () => {
  menu_sec.scrollLeft -= 115;

  right_arrow.style.visibility = "visible";
})