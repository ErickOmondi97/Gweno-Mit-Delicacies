/* MENU START SECTION */
let menu_sec =document.getElementById("menu_sec");
let left_arrow = document.getElementById("left_arrow");
let right_arrow = document.getElementById("right_arrow");

right_arrow.addEventListener('click', () => {
  menu_sec.scrollLeft += 115;

  if(menu_sec.scrollLeft > 115) {
    right_arrow.style.visibility = "hidden";
    console.log("yes, it works")
  }
});

left_arrow.addEventListener('click', () => {
  menu_sec.scrollLeft -= 115;

  right_arrow.style.visibility = "visible";
});

/* PAUSE/PLAY BUTTON */
let videos = document.getElementById('video')[0];
let plays = document.getElementById('play')[0];
let pauses = document.getElementById('pause')[0];
let screens = document.getElementById('screen')[0];

plays.addEventListener('click', ()=> {
  videos.play();
  plays.style.display = "none";
  screens.style.display = "none";
  pauses.style.display = "flex";
});

pauses.addEventListener('click', () => {
  videos.pause();
  plays.style.display = "flex";
  screens.style.display = "flex";
  pauses.style.display = "none";
})

videos.addEventListener('ended', () => {
  plays.style.display = "flex";
  screens.style.display = "flex";
  pauses.style.display = "none";
})