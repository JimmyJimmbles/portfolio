window.addEventListener("scroll", stickyNav);
/**
 * Mouse Follow Parallax
**/
(function(){
  let pbox = document.getElementById('parallaxBox');
  let l1Left = document.getElementById('l1').offsetLeft,
    l1top = document.getElementById('l1').offsetTop,
    l2Left = document.getElementById('l2').offsetLeft,
    l2top = document.getElementById('l2').offsetTop,
    l3Left = document.getElementById('l3').offsetLeft,
    l3top = document.getElementById('l3').offsetTop,
    l5Left = document.getElementById('l5').offsetLeft,
    l5top = document.getElementById('l5').offsetTop,
    l6Left = document.getElementById('l6').offsetLeft,
    l6top = document.getElementById('l6').offsetTop;

  pbox.onmousemove = (event) => {
    event = event || window.event;
    let x = event.clientX,
      y = (event.clientY) - 73;
    mouseParallax("l1", l1Left, l1top, x, y, 23);
    mouseParallax("l2", l2Left, l2top, x, y, 13);
    mouseParallax("l3", l3Left, l3top, x, y, 7);
    mouseParallax("l5", l5Left, l5top, x, y, 5);
    mouseParallax("l6", l6Left, l6top, x, y, 20);
  }
})();

function mouseParallax(id, left, top, mouseX, mouseY, speed) {
  let obj = document.getElementById(id);
  let parantObj = obj.parentNode,
    containerWidth = parseInt(parantObj.offsetWidth),
    containerHeight = parseInt(parantObj.offsetHeight);

  obj.style.left = left + (mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth * speed + "px";
  obj.style.top = top + (mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight * speed + "px";
}
/**
 * Sticky Navigation
**/
function stickyNav() {
  let navOffset, windowY, fullNav = document.getElementById("fullNav");
  navOffset = fullNav.offsetTop;
  windowY = window.scrollY;

  if (windowY >= navOffset) {
    fullNav.classList.add("sticky");
  } else if (windowY <= navOffset) {
    fullNav.classList.remove("sticky");
  }
}
