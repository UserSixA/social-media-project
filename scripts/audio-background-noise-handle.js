let backgroundMusic = new Audio('Background/Audio/background-music.mp3');
let rainNoise = new Audio('Background/Audio/rain_cave.mp3');
let fireNoise = new Audio('Background/Audio/fire_cave.mp3');
let backgroundMusicVolume = 0.16;
let rainNoiseVolume = 0.043;
let fireNoiseVolume = 0.17;

let timeout;

let contentSection = document.getElementById('contentContainer');

function AudioPlay(audio, volume) {
  audio.loop = false;
  audio.currentTime = 0;
  audio.volume = volume;
  audio.play();
}
function AudioStop(audio) {
  audio.pause();
  audio.currentTime = 0;
}
function AudioLoop(audio, volume) {
  audio.loop = true;
  audio.currentTime = 0;
  audio.volume = volume;
  audio.play();
}
function StartBackgroundAudio() {
  AudioLoop(backgroundMusic, backgroundMusicVolume);
  AudioLoop(rainNoise, rainNoiseVolume);
  AudioLoop(fireNoise, fireNoiseVolume);
}
function StopBackgroundAudio() {
  AudioStop(backgroundMusic);
  AudioStop(rainNoise);
  AudioStop(fireNoise);
}

function HideContentSection() {
  contentSection.style.opacity = 0;
}

function ShowContentSection() {
  contentSection.style.opacity = 1;
}

function handleActivity() {
  StopBackgroundAudio();
  ShowContentSection();
  clearTimeout(timeout);

  // Set a new timeout for starting the background audio
  timeout = setTimeout(() => {
    StartBackgroundAudio();
    HideContentSection();
  }, 3000);
}

document.addEventListener("click", handleActivity);

