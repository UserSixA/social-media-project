let rainNoise = new Audio('Background/Audio/rain_cave.mp3');
let fireNoise = new Audio('Background/Audio/fire_cave.mp3');
let rainNoiseVolume = .06;
let fireNoiseVolume = .17;

AudioLoop(rainNoise, rainNoiseVolume);
AudioLoop(fireNoise, fireNoiseVolume);

function AudioPlay(audio) {
  audio.loop = false;
  audio.currentTime = 0;
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