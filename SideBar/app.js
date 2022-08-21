
const btn = document.querySelector('.btn');
const sec = document.querySelector('.close')


 btn.addEventListener('click',function(){
    document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.menu').classList.toggle('menu-ex');
    document.querySelector('.hh').classList.toggle('blur');
    document.querySelector('.hh2').classList.toggle('blur');
    
    
   
 });
 sec.addEventListener('click',function(){
  
   document.querySelector('.menu').classList.toggle('hide');
    document.querySelector('.menu').classList.toggle('menu-ex');
    document.querySelector('.hh').classList.toggle('blur');
    document.querySelector('.hh2').classList.toggle('blur');
   
 })
 
//  document.body.addEventListener('click',function(){
//     document.querySelector('.menu').classList.remove('hide');
//  })