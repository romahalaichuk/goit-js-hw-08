import Player from 'vimeo-player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const saveTimeToLocalStorage = throttle(async () => {
  const currentTime = await player.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

const setPlaybackTimeFromLocalStorage = async () => {
  const storedTime = localStorage.getItem('videoplayer-current-time');
  if (storedTime) {
    await player.setCurrentTime(parseFloat(storedTime));
  }
};

player.on('timeupdate', saveTimeToLocalStorage);

setPlaybackTimeFromLocalStorage();
