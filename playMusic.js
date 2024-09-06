class createPlay {
    constructor(e) {
        this.parent = e;
    }
    
    showPlayBtn(){
        const playSign = document.createElement('i');
        playSign.classList.add('fa-solid', 'fa-circle-play');
        playSign.style.color = '#1ED760';
        playSign.style.position = 'absolute';
        playSign.style.left = '7.5vw';
        playSign.style.bottom = '6.45vw';
        playSign.style.fontSize= '3.1vw';
        playSign.style.backgroundColor = 'black';
        playSign.style.borderRadius = '50%';
        playSign.style.cursor = 'pointer';

        let parent = this.parent;
        parent.appendChild(playSign);
    }
}

const playDivs = document.querySelectorAll(".play");

playDivs.forEach(play => {
    play.addEventListener('mouseenter', (e)=> {
        const showPlay = new createPlay(e.target);
        showPlay.showPlayBtn();
    });

    play.addEventListener('mouseleave', (e)=> {
        const hidePlay = new hidePlayFeature(e);
        hidePlay.hidePlayBtn();
    })

})

class hidePlayFeature extends createPlay {
    constructor(parent, e) {
        super(parent)
    }

    hidePlayBtn(){
        const playSign = this.showPlayBtn();

        parent.remove(playSign);
        alert("works");
    }

}