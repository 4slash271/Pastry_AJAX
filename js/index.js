const mail = document.querySelector('.mail-wrapper .mail');
const mailWrap= document.querySelector('.mail-wrapper');
const mailStage= document.querySelector('.mail-stage');
const lineTxt = document.querySelector('.line .line__text');
const letter = 'Pastry AJAX KimSulki & KeemHeejoo';
// arr = arr.join(',');

let arr = letter.split('');//letter를 하나씩 분절
for (var i = 0; i<arr.length-1; i++)
arr.filter(function(i){ 
        console.log(i);
        // console.log(arr[i]);
        
             lineTxt.innerHTML = '<span class="circle">'+ i +'</span>';
            lineTxt.innerHTML += '<span class="circle">'+ i +'</span>';
            lineTxt.innerHTML += '<span class="circle">'+ i +'</span>';
            lineTxt.innerHTML += '<span class="circle">'+ i +'</span>';
            lineTxt.innerHTML += '<span class="circle">'+ i +'</span>';
            lineTxt.innerHTML += '<span class="circle">'+ i +'</span>';
      })
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

