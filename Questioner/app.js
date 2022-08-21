// const questions = document.querySelector('.q');
// const btn = questions.querySelector('.btn');

// btn.addEventListener('click',function(){
// questions.classList.toggle('show');
// })

const questions = document.querySelectorAll('.q');

questions.forEach(function(question){
    const btn = question.querySelector('.btn');
    btn.addEventListener('click',function(){
        // questions.forEach(function(item){
        //     if (item != questions) {
        //         item.classList.remove('show')
        //     }
        //     else{
        //         item.classList.add('show')
        //     }
        // })
        question.classList.toggle('show')
    })
})