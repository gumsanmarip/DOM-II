import './less/index.less'

//mouseover
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', function(event){
    event.target.style.color = 'blue';
    setTimeout(function() {
        event.target.style.color = "";
      }, 500);
});
//keydown
const body = document.querySelector('body');
body.addEventListener('keydown', function(event){
    if( event.key === 'b'){
        body.style.backgroundColor = 'red';
    }
});
//wheel
logo.addEventListener('wheel', function () {
    this.style.fontSize = "100px";
})
//load
window.addEventListener('load', function(){
    this.alert('Loaded');
});
//focus
document.querySelector('.logo-heading').focus();
//resize
window.addEventListener('resize', function(){
  this.alert('Resized');
})
//scroll
window.addEventListener('scroll', function(){
    body.style.backgroundColor = 'blue';
});
//select
const footer = document.querySelector('footer');
footer.addEventListener('select', function(){
    this.alert('Selected Copyright');
});
//dblclick
window.addEventListener('dblclick', function(){
    this.alert('Double clicked');
});
//drag / drop
const intro = document.querySelector('.intro');
intro.addEventListener('drag', function() {
    intro.style.backgroundColor = 'green';
});