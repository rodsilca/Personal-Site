window.addEventListener('scroll',function(){
    const icone = document.getElementById('center');
    if(window.scrollY>0){
        icone.classList.add('escondido');
    }else{
        icone.classList.remove('escondido');
    }
});