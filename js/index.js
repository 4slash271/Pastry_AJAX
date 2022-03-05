const mail = document.querySelector('.mail-wrapper .mail');
const mailWrap= document.querySelector('.mail-wrapper');
const mailStage= document.querySelector('.mail-stage');
const lineTxt = document.querySelector('.line .line__text');
const letter = 'Pastry~AJAX~KimSulki~&~KeemHeejoo';
// arr = arr.join(',');



let arr = letter.split('');//letter를 하나씩 분절
console.log(arr);
//배열 안의 값을 반복문 안으로 가져온다
//반복문 안에서 위의 배열값을 하나의 변수로 묶는다
//묶은 변수는 하나씩 증가하며 변수는 배열값보다 하나 적고 0부터 시작한다
//변수는 함수 안에서 증가하면서 html 안에 적용된다



        for(var i=0; i<arr.length-1; i++){

        lineTxt.innerHTML += '<span class="circle">'+' '+ arr[i] +'</span>';
    

        }
// [].forEach.call(arr, function(i){ 
//   for (var i = 0; i<arr.length-1; i++)
//     console.log(i);
//     console.log(arr[i]);
    
//     lineTxt.innerHTML = '<span class="circle">'+ arr[i] +'</span>';
//         lineTxt.innerHTML += '<span class="circle">'+ arr[i] +'</span>';
//         lineTxt.innerHTML += '<span class="circle">'+ arr[i] +'</span>';
//         lineTxt.innerHTML += '<span class="circle">'+ arr[i] +'</span>';
//         lineTxt.innerHTML += '<span class="circle">'+ arr[i] +'</span>';
//         lineTxt.innerHTML += '<span class="circle">'+ arr[i] +'</span>';
//   });



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

