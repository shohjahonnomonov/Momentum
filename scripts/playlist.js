import { allMusic } from "./db/music.js";

export function playList() {
    const playPrev = document.querySelector('.play-prev');
    const playNext = document.querySelector('.play-next');
    const play = document.querySelector('.play');
    const playList = document.querySelector('.play-list');

    let isPlaying = false;
    let currentTrack = 0;

    const audio = new Audio(allMusic[currentTrack].src);

    allMusic.forEach((track, index) => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = track.title;
        li.dataset.index = index;

        playList.appendChild(li);

    });

    play.addEventListener('click', () => {
        isPlaying ? pauseTrack() : playTrack();
    });

    playNext.addEventListener('click', () => {
        currentTrack += 1;
        if (currentTrack >= allMusic.length) currentTrack = 0;
        updateTrack();

    });

    playPrev.addEventListener('click', () => {
        currentTrack -= 1;
        if (currentTrack < 0) currentTrack = allMusic.length - 1;
        updateTrack();

    });

    function updateTrack() {
        const playItems = document.querySelectorAll('.play-item');
        audio.src = allMusic[currentTrack].src;

console.log(playItems);

        playItems.forEach(item => {
            
            item.classList.remove('item-active');

            if (currentTrack === +item.dataset.index) {
                item.classList.add('item-active');
            }
        });

        playTrack();
    }

    function playTrack() {
        isPlaying = true;
        audio.play();
        play.classList.remove('play');
        play.classList.add('pause');
    }
    function pauseTrack() {
        isPlaying = false;
        audio.pause();
        play.classList.remove('pause');
        play.classList.add('play');
    }
}