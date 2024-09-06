const playDivs = document.querySelectorAll('.play');
let audio;
let songToBePlayed;

playDivs.forEach(playDiv => {
    
    // Play button that occurs on hover
    const playSign = document.createElement('i');
    playSign.classList.add('fa-solid', 'fa-circle-play');
    // playSign.style.display = 'none';
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
    // pauseSign.style.zIndex = 2;
    
    playDiv.addEventListener('mouseenter', (e)=> {
        let parent = e.target;
        playDiv.appendChild(playSign);
        // playSign.style.display = 'block';
        // playSign.style.display = 'block';
    })
    
    playDiv.addEventListener('mouseleave', (e)=> {
        let parent = e.target;
        playSign.remove();
    })
    
    // let songToBePlayed;
    playSign.addEventListener('click', (e)=> {
        pauseSign.style.display = 'block';
        playDiv.appendChild(pauseSign);

        playSign.style.display = 'none';
        if (pauseSign.style.display = 'block') {
            playSign.style.display = 'none';
        }

        for (let i = 0; i < 5 ; i++) {
            songToBePlayed = playDiv.childNodes[3].childNodes[1].innerText;
            
            playMusic(songToBePlayed);
            break; 
        }
    })

    pauseSign.addEventListener('click', ()=> {
        pauseSign.remove();
        playSign.style.display = 'block';

        pauseMusic(songToBePlayed);
    })
    
});

// Function to play songs
function playMusic(song){
    if (audio) {
        audio.pause();
    }

    if (song === 'Sajni Re') {
        audio = new Audio('./Sajni Re.mp3');
        audio.play();
    } else if (song === 'Cheque') {
        audio = new Audio('./Cheque.mp3');
        audio.play();
    } else if (song === 'Naadan Parinde') {
        audio = new Audio('./Naadan Parinde.mp3');
        audio.play();
    } else if (song === 'Tum Hi Ho') {
        audio = new Audio('./Tum Hi Ho.mp3');
        audio.play();
    } else if (song === 'Phele Bhi Mai'){
        audio = new Audio('./Phele Bhi Mai.mp3');
        audio.play();
    }
}

// Function to pause songs
function pauseMusic(song) {
    audio.pause();
}