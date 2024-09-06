const playDivs = document.querySelectorAll('.play');

playDivs.forEach(playDiv => {
    
    // Play button that occurs on hover
    const playSign = document.createElement('i');
    playSign.classList.add('fa-solid', 'fa-circle-play');
    playSign.style.display = 'none';
    playSign.style.color = '#1ED760';
    playSign.style.position = 'absolute';
    playSign.style.left = '7.5vw';
    playSign.style.bottom = '6.45vw';
    playSign.style.fontSize= '3.1vw';
    playSign.style.backgroundColor = 'black';
    playSign.style.borderRadius = '50%';
    playSign.style.cursor = 'pointer';
    
    // Pause button that occurs when clicked on play button
    const pauseSign = document.createElement('i');
    pauseSign.classList.add('fa-solid', 'fa-circle-pause');
    pauseSign.style.display = 'none';
    pauseSign.style.color= '#1ED760';
    pauseSign.style.position = 'absolute';
    pauseSign.style.left = '7.5vw';
    pauseSign.style.bottom = '6.45vw';
    pauseSign.style.fontSize= '3.1vw';
    pauseSign.style.backgroundColor= 'black';
    pauseSign.style.borderRadius = '50%';
    pauseSign.style.zIndex = 2;
    
    
    playDiv.addEventListener('mouseenter', (e)=> {
        let parent = e.target;
        playDiv.appendChild(playSign);
        playSign.style.display = 'block';
    })
    
    playDiv.addEventListener('mouseleave', (e)=> {
        let parent = e.target;
        playSign.remove();
        // playDiv.appendChild(pauseSign);
        // playSign.style.display = 'none';
        // pauseSign.style.display = 'block';

    })

    playSign.addEventListener('click', (e)=> {
        playSign.style.display = 'none';
        
        pauseSign.style.display = 'block';
        playDiv.appendChild(pauseSign);

    })
    
});

// playSign.addEventListener("click", (e)=> {
//     console.log("play button");
    
    // console.log(e);
    // console.log(e.target.addEventListener);
    
    
    // e.target.addEventListener("click", ()=> {
    //     playSign.style.display = 'none';
    //     pauseSign.style.display = 'block';

    // })
    
// })



function playMusic() {
    
    
}

