const btn = document.querySelector('.btn');

const colors = [
    'green','blue','pink','brown','yellow','orange','black'
];

btn.addEventListener('click',function(){
    const changer = colors[randomG()];
    document.body.style.backgroundColor = changer;
})

function randomG (){
    return Math.floor(Math.random()*colors.length)
}