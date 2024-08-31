const playDivs = document.querySelectorAll('.play');

playDivs.forEach(evt => {
    const playSign = document.createElement('i');
    playSign.classList.add('fa-solid', 'fa-circle-play');
    playSign.style.position = 'relative';
    playSign.style.left = '40%';
    playSign.style.bottom = '50%';
    playSign.style.fontSize= '3vw';
    playSign.style.color = '#1ED760';
    playSign.style.backgroundColor = 'black';
    playSign.style.borderRadius = '50%';
    
    evt.addEventListener('mouseenter', (e)=> {
        let parent = e.target;
        console.log(parent);
        parent.appendChild(playSign);


        
    })
    
    evt.addEventListener('mouseleave  ', (e)=> {
        let parent = e.target;
        // parent.removeChild(playSign);
        playSign.remove();
    })
    

});