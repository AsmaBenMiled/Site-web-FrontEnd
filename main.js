//add hovered class in selected li
let list=document.querySelectorAll('.side-bar li');
function activelink(){
  list.forEach((item)=>
  item.classList.remove('hovered'));
  this.classList.add('hovered');
}
list.forEach((item)=>
item.addEventListener('mouseover',activelink))

$(document).ready(function(){
//jquery for toggle sub menus
$('.sub-btn').click(function(){
  $(this).next('.sub-menu').slideToggle();
  $(this).find('.dropdown').toggleClass('rotate');
});

//jquery for expand and collapse the sidebar
$('.menu-btn').click(function(){
  $('.side-bar').addClass('active');
  $('.menu-btn').css("visibility", "");
});

$('.close-btn').click(function(){
  $('.side-bar').removeClass('active');
  $('.menu-btn').css("visibility", "visible");
});
});
