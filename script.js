const playDivs = document.querySelectorAll('.play');

playDivs.forEach(evt => {
    const playSign = document.createElement('i');
    playSign.classList.add('fa-solid', 'fa-circle-play');
    playSign.style.position = 'absolute';
    playSign.style.left = '7.5vw';
    playSign.style.bottom = '6.45vw';
    playSign.style.fontSize= '3.1vw';
    playSign.style.color = '#1ED760';
    playSign.style.backgroundColor = 'black';
    playSign.style.borderRadius = '50%';

    const pauseSign = document.createElement('i');
    pauseSign.classList.add('fa-solid', 'fa-solid-pause');
    pauseSign.style.color= '#1ED760';
    pauseSign.style.position = 'absolute';
    pauseSign.style.backgroundColor= 'black';
    pauseSign.style.fontSize= '3vw';
    pauseSign.style.borderRadius = '50%';
    
    evt.addEventListener('mouseenter', (e)=> {
        let parent = e.target;
        console.log(parent);
        parent.appendChild(playSign);
    })
    
    evt.addEventListener('mouseleave', (e)=> {
        let parent = e.target;
        playSign.remove();
    })

    playSign.addEventListener("click",(e)=> {
        
        
    });
    

});

