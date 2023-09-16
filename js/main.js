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
/* let videos = document.getElementById('video')[0];
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
}) */

/* HEADER SHIFT */
const dataload = () => {
  const sec_title = document.getElementById('sec_title');
  const h6_dots = document.getElementsByTagName('h6');

  setTimeout(() => {
    sec_title.innerHTML = "BARGAIN <br> BUCKET MENU <br> CAMPAIGN"
    h6_dots[1].classList.add("head_dots_main");
    h6_dots[2].classList.remove("head_dots_main");
    h6_dots[3].classList.remove("head_dots_main");
    h6_dots[4].classList.remove("head_dots_main");
  }, 0000);

  setTimeout (() => {
    sec_title.innerHTML = "BURGER <br> MENU <br> CAMPAIGN"
    h6_dots[1].classList.remove("head_dots_main");
    h6_dots[2].classList.add("head_dots_main");
    h6_dots[3].classList.remove("head_dots_main");
    h6_dots[4].classList.remove("head_dots_main");
  }, 3000);
  
  setTimeout (() => {
    sec_title.innerHTML = "BARGAIN <br> FRIES MENU <br> CAMPAIGN"
    h6_dots[1].classList.remove("head_dots_main");
    h6_dots[2].classList.remove("head_dots_main");
    h6_dots[3].classList.add("head_dots_main");
    h6_dots[4].classList.remove("head_dots_main");
  }, 6000);
  
  setTimeout (() => {
    sec_title.innerHTML = "BARGAIN <br> CHICKEN MENU <br> CAMPAIGN"
    h6_dots[1].classList.remove("head_dots_main");
    h6_dots[2].classList.remove("head_dots_main");
    h6_dots[3].classList.remove("head_dots_main");
    h6_dots[4].classList.add("head_dots_main");
  }, 9000);

  console.log("I can see this");
};

setInterval(dataload, 12000);

dataload();