// Get references to the DOM elements
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const trackTitle = document.getElementById('trackTitle');

// Array of tracks (replace with your actual audio file paths)
const tracks = [
    { title: "Track 1 - Ello Maleyaagidhe", file: "music/01-elloMaleyaagidhe.mp3" },
    { title: "Track 2- nene nene ", file: "music/Neene neene.mp3" },
    { title: "Track 3- bare bare", file: "music/BaareBaare.mp3" }
];

let currentTrackIndex = 0;

// Function to update the audio source and title
function loadTrack(index) {
    audio.src = tracks[index].file;
    trackTitle.textContent = tracks[index].title;
    audio.load();
    audio.play(); // Automatically play the loaded track
}

// Play/Pause functionality
playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "Pause";
    } else {
        audio.pause();
        playPauseBtn.textContent = "Play";
    }
});

// Previous track
prevBtn.addEventListener('click', function() {
    currentTrackIndex = (currentTrackIndex === 0) ? tracks.length - 1 : currentTrackIndex - 1;
    loadTrack(currentTrackIndex);
    playPauseBtn.textContent = "Pause";
});

// Next track
nextBtn.addEventListener('click', function() {
    currentTrackIndex = (currentTrackIndex === tracks.length - 1) ? 0 : currentTrackIndex + 1;
    loadTrack(currentTrackIndex);
    playPauseBtn.textContent = "Pause";
});

// Auto-play next track when the current track ends
audio.addEventListener('ended', function() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length; // Go to the next track, and loop back to the first one
    loadTrack(currentTrackIndex);
    playPauseBtn.textContent = "Pause"; // Ensure the button text remains "Pause"
});

// Initial track load
loadTrack(currentTrackIndex);
