import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(setToLocalStorage, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function setToLocalStorage(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};