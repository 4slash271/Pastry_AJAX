
const lineTxt = document.querySelector('.line .line__text');
const letter = 'Pastry/AJAX/Sulki&Heejoo';
const colors = ["#7A827F", "#3E4241", "#B7C3BF", "#9EA8A5","#706F6F"]


/*************************** line ***********************************/
let arr = letter.split('');//letter를 하나씩 분절
console.log(arr);

for(var i=0; i<arr.length; i++){
    lineTxt.innerHTML += '<span class="circle">'+ arr[i] +'</span>';
}

randomColor();
function randomColor(){
    setInterval(changeColor, 1000)//일정한 시간을 간격으로 작업을 계속 실행.
}
    function changeColor(){
        lineTxt.children[7].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        lineTxt.children[8].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        lineTxt.children[9].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        lineTxt.children[10].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];        
    }

