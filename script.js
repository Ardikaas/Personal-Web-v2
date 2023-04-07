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
