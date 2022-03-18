
    let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
    let tag = document.querySelector('.tag__text');
    let windowHeight = window.innerHeight; // 스크린 창
    let heading = document.querySelector('.heading__icon');
    
    heading.addEventListener('click',function(e){
        if(0 <= scrollLocation <=550)
        {window.scroll({ top: 2500, left: 0, behavior: 'smooth' });}
        else(551<= scrollLocation)
        {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
        
        }
    ) 

window.addEventListener('scroll', () => {
  scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
 tag = document.querySelector('.tag__text');
 windowHeight = window.innerHeight; // 스크린 창
 heading = document.querySelector('.heading__icon');

heading.addEventListener('click',function(e){
    if(0 <= scrollLocation <=550)
    {window.scroll({ top: 2500, left: 0, behavior: 'smooth' });}
    else(551<= scrollLocation)
    {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
      }
)
    
     if(scrollLocation >= windowHeight*0.7){
        heading.style.color ="#fff"
        heading.style.transform ="unset";
        tag.innerText = "위로 스크롤!"
       
    }
    else{
        heading.style.transform ="rotateX(180deg)";
        heading.style.transform ="rotateZ(180deg)";
        heading.style.color ="#090a1a"
        tag.innerText = "아래로 스크롤!"
    }
	
})


