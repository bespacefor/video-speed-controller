const video = document.querySelector('.video');
const speedBar = document.querySelector('.speed__bar');
const speed = speedBar.querySelector('.speed__value');
const minSpeedValue = 0.4;
const maxSpeedValue = 4;

function displayedValue(e) {
    const pageY = e.pageY - speedBar.offsetTop;
    const percent = pageY / speedBar.offsetHeight;
    const elemHeight = Math.round(percent * 100) + '%';
    const playbackRate = percent * (maxSpeedValue - minSpeedValue) + minSpeedValue;
    speed.style.height = elemHeight;
    speed.textContent = playbackRate.toFixed(1) + '';
};

function clickedValue(e) {
    const pageY = e.pageY - speedBar.offsetTop;
    const percent = pageY / speedBar.offsetHeight;
    const playbackRate = percent * (maxSpeedValue - minSpeedValue) + minSpeedValue;
    video.playbackRate = playbackRate;
};

speedBar.addEventListener('mousemove', displayedValue);
speedBar.addEventListener('click', clickedValue);
