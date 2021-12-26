const mail = document.querySelector('.mail-wrapper .mail');
const mailWrap= document.querySelector('.mail-wrapper');
const mailStage= document.querySelector('.mail-stage');


function openMail(e){
    window.location.href = "http://127.0.0.1:5500/html/mail.html"
}

function stopRotate(){
    mailStage.classList.remove('rotate');
}
function startRotate(){
    mailStage.classList.add('rotate');
}
mail.addEventListener('click', openMail);
mailWrap.addEventListener('mouseenter', stopRotate);
mailWrap.addEventListener('mouseleave', startRotate);

