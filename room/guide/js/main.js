const sildes = document.querySelector('.rooms_slider_wrap > ul');
const sildeImg = document.querySelectorAll('.rooms_slider_wrap li');
const imgWidth = sildeImg[0].children[0].offsetWidth;

sildes.style.width = `${imgWidth*(slideCount+2)}px`


function makeClone(){
  let clone_first = sildeImg[0].cloneNode(true);
  let clone_last = sildes.lastElementChild.cloneNode(true);
  sildes.append(clone_first);
  sildes.firstElementChild.before(clone_last);
}
function initFunction() {
  sildes.style.width = `${imgWidth*(slideCount+2)}px`
  sildes.style.left = `-${imgWidth}px`
}