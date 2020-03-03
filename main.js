

document.addEventListener('keydown',function (event) {
    const audio = document.getElementById(event.key.toUpperCase());
    audio.currentTime = 0;
    const item = document.querySelector(`.${event.key.toUpperCase()}`);
    audio.play();
    item.classList.add('playing');

    setTimeout(()=>{
        item.classList.remove('playing')
    },200);

});