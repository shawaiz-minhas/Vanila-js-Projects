const details = [
  {
    number: '1-',
    title: "M Shawaiz Minhas",
    category:'heavy',
    working:
      "I want to work as the person who will change the world that everyone looking for",
      date:'I was born on 18 Jan,2001. The day we could say the man born',
      wish:'I want to be good person at every cost. Maybe it take time to be like that'
  },
  {
    number: '2-',
    category:'heavy',
    title: "Ali",
    working:
      "I want to work as the person who will change the world that everyone looking for",
      date:'I was born on 18 Jan,2001. The day we could say the man born',
      wish:'I want to be good person at every cost. Maybe it take time to be like that'
  },
  {
    number: '3-',
    title: "Sohail",
    category:'normal',
    working:
      "I want to work as the person who will change the world that everyone looking for",
      date:'I was born on 18 Jan,2001. The day we could say the man born',
      wish:'I want to be good person at every cost. Maybe it take time to be like that'
  },
  {
    number: '4-',
    title: "Awais",
    category:'normal',
    working:
      "I want to work as the person who will change the world that everyone looking for",
      date:'I was born on 18 Jan,2001. The day we could say the man born',
      wish:'I want to be good person at every cost. Maybe it take time to be like that'
  },
  {
    number: '5-',
    category:'useless',
    title: "Ahmad",
    working:
      "I want to work as the person who will change the world that everyone looking for",
      date:'I was born on 18 Jan,2001. The day we could say the man born',
      wish:'I want to be good person at every cost. Maybe it take time to be like that'
  },
  {
    number: '6-',
    category:'useless',
    title: "Hamza",
    working:
      "I want to work as the person who will change the world that everyone looking for",
      date:'I was born on 18 Jan,2001. The day we could say the man born',
      wish:'I want to be good person at every cost. Maybe it take time to be like that'
  },
];

const section = document.querySelector(".section-center");
const btns = document.querySelectorAll('.filter-btn');
window.addEventListener('DOMContentLoaded',function(){

display(details);
})


btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const cat = e.currentTarget.dataset.id;
        const menCat = details.filter(function(coco){
            if(coco.category == cat){
                return coco
            }
        });
        if (cat === 'all') {
            return display(details)
        }
        else{
            display(menCat)
        }
    })
})

function display(myMenu){
    let menu = myMenu.map(function(item){
        return `
            <div class="title">
           ${item.number}  <strong>${item.title}</strong>
            </div>
            <div class="working">
             ${item.working}
            </div>
            <div class="date">
            ${item.date}
            </div>
            <div class="wish">
             ${item.wish}
            </div>
          `;
    
        
    });
    menu = menu.join("");
    section.innerHTML = menu
}

