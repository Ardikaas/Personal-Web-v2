function erorr(){
  alert('uh oh sowething wrong with it')
}

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
}); 

let hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));

let observerR = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('show-right');
    }else{
      entry.target.classList.remove('show-right');
    }
  });
}); 

let hiddenR = document.querySelectorAll('.hidden-right');
hiddenR.forEach((el) => observerR.observe(el));

var text = ["Ardikaas", "Amateur Designer", "Junior Web Designer"];
var idx = 0;
var ubah = document.getElementById('change-text');
let anim = document.getElementsByClassName('show-text');
var lama = setInterval(change, 6000)

function change(){
  ubah.innerHTML = text[idx];
  idx++;
  if(idx >= text.length){
    idx = 0;
  }
}

const btntoggle = document.querySelector('.resicon')
const btntoggleicon = document.querySelector('.resicon i')
const accor = document.querySelector('.accordion')

btntoggle.onclick = function(){
  accor.classList.toggle('open')
  const isOpen = accor.classList.contains('open')

  btntoggleicon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}