import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const VIDEO_STORAGE_KEY = 'videoplayer-current-time';

const saveCurrentTime = time => {
  localStorage.setItem(VIDEO_STORAGE_KEY, time.toString());
};

const loadCurrentTime = () => {
  const savedTime = localStorage.getItem(VIDEO_STORAGE_KEY);
  return savedTime ? parseFloat(savedTime) : 0;
};

const handleTimeUpdate = throttle(async ({ seconds }) => {
  saveCurrentTime(seconds);
}, 1000);

player.on('timeupdate', handleTimeUpdate);

player.setCurrentTime(loadCurrentTime());
