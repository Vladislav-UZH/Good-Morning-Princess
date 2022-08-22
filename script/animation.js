
let button = document.querySelector('.btn-start');
button.onclick = function(){
  let elements = document.querySelectorAll('.img-list__picture');
  elements.forEach(function(el) {
    el.classList.toggle('hide-img');
  });
}