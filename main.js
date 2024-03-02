const question = document.querySelectorAll('.question');
const block = document.querySelectorAll('.block');

question.forEach( (item , i) => {
  question[i].addEventListener('click', ()=>{

    block.forEach(( cadaQuestion, i)=>{
      block[i].classList.remove('active');
    })

    block[i].classList.add('active');
    // if (question[i].classList.contains('active')) {
    //   console.log(1);
    //   question[i].classList.remove('active')
    // } else {
    //   console.log(2);
    //   question[i].classList.add('active')
    // }
  })
})