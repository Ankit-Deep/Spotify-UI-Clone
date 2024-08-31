const playDivs = document.querySelectorAll('.play');

playDivs.forEach(evt => {
    const playSign = document.createElement('i');
    playSign.classList.add('fa-solid', 'fa-circle-play');
    // playSign.style.border= '2px solid white';
    playSign.style.position = 'relative';
    playSign.style.left = '40%';
    // playSign.style.top = '-40%';
    playSign.style.fontSize= '3vw';
    playSign.style.color = '#1ED760';
    playSign.style.backgroundColor = 'black';
    playSign.style.borderRadius = '50%';

    const pauseSign = document.createElement('i');
    pauseSign.classList.add('fa-solid', 'fa-solid-pause');
    pauseSign.style.color= '#1ED760';
    pauseSign.style.position = 'relative';
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
        // alert("works")
    })

    playSign.addEventListener("click",(e)=> {
        playSign.classList.replace('fa-circle-play', 'fa-solid-pause');
        let parent = e.target;
        playSign.remove();
        parent.appendChild(pauseSign);
        console.log('play clicked');
        
    });
    

});

