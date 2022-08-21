const val1 = document.querySelector('.value1');
const val2 = document.querySelector('.value2');
const btn = document.querySelector('.btn');
const res = document.querySelector('.result');




btn.addEventListener('click',function(){
    val1.textContent = randomG1();
    val2.textContent = randomG2();
    if (val1.textContent == val2.textContent) {
        res.innerHTML = "This is equal"
    }
   else if (val1.textContent > val2.textContent) {
        res.innerHTML = "Player One Won 🎊🎊🎊"
    }
    else if (val1.textContent < val2.textContent) {
        res.innerHTML = "Player Two Won 🎊🎊🎊"
    }
})




function randomG1(){
    return Math.floor(Math.random()*6 +1);
}
function randomG2(){
    return Math.floor(Math.random()*6 +1);
}
