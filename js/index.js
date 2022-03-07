const mail = document.querySelector('.mail-wrapper .mail');
const mailWrap= document.querySelector('.mail-wrapper');
const mailStage= document.querySelector('.mail-stage');
const lineTxt = document.querySelector('.line .line__text');
const letter = 'Pastry~AJAX~KimSulki~&~KeemHeejoo';

const randomColors = "#57E653"


let arr = letter.split('');//letter를 하나씩 분절
// console.log(arr="p");

// document.body.style.backgroundColor= "#" + Math.ceil(Math.random() * 0xffffff).toString(16);
// body.document.style.backgroundColor = "#" + Math.ceil(Math.random() * 0xffffff).toString(16);

for(var i=0; i<arr.length-1; i++){
        lineTxt.innerHTML += '<span class="circle">'+' '+ arr[i] +'</span>';
        }
let circle =document.querySelectorAll('.circle');
console.log(circle);

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

