const persons = [

    {
        name:'Ali',
        age:21,
        job:'UX Designer',
        info:'Very good person'
    },
    {
        name:'Kiran',
        age:22,
        job:'UI Designer',
       
    }
    ,
    {
        name:'Komal',
        age:23,
        job:'Boss ',
       
    },
    {
        name:'Tuba',
        age:29,
        job:'HR',
       
    }
];
let names = document.querySelector('.name');
let ages = document.querySelector('.age');
let jobs = document.querySelector('.job');
let infos = document.querySelector('info');
const pre = document.querySelector('.back');
const next = document.querySelector('.forward')


let current = 0;

window.addEventListener('DOMContentLoaded',function(){
    const item = persons[current];
    names.textContent = item.name;
    ages.textContent = item.age;
    jobs.textContent = item.job;
   

    next.addEventListener('click',function(){
       current++;
       if (current>persons.length-1) {
        current = 0;
       };
       getInfo();
    })
    pre.addEventListener('click',function(){
        current++;
        if (current<0) {
         current = persons.length-1;
        };
        getInfo();
     })
});
function getInfo(){
    const item = persons[current];
    names.textContent = item.name;
    ages.textContent = item.age;
    jobs.textContent = item.job;
  
};
current = Math.floor(Math.random()*persons.length)