/*************************** mail ***********************************/
const mailWrap= document.querySelector('.mails');
const mailStage= document.querySelector('.mails__outer');
const mail = document.querySelectorAll('.mails .mail');
[].forEach.call(mail, function(e){ 
    e.addEventListener("click", 
    function(){ 
        let mailNumber = this.id;
        openMail(mailNumber, e);}
    )         
    });
function openMail(mailNumber, e){
        window.location.href = "http://127.0.0.1:5500/html/"+mailNumber+".html";
    }
 
   
function stopRotate(){
    mailStage.classList.remove('rotate');
}
function startRotate(){
    mailStage.classList.add('rotate');
}

mailWrap.addEventListener('mouseenter', stopRotate);
mailWrap.addEventListener('mouseleave', startRotate);
