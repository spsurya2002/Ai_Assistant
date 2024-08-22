const speakButton = document.getElementById('speak-button');
const pauseButton = document.getElementById('pause-button');
const resumeButton = document.getElementById('resume-button');
const resultDiv = document.getElementById('response');
let utterance = null;

speakButton.addEventListener('click', function() {
    let textInput = resultDiv?.innerHTML ?? "No input speech so I can't speak about this.";
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        utterance = new SpeechSynthesisUtterance(textInput);
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Sorry, your browser does not support text to speech!');
    }
});

pauseButton.addEventListener('click', function() {
    if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
    } else {
        console.log("No speech to pause or speech synthesis not supported");
    }
});

resumeButton.addEventListener('click', function() {
    if ('speechSynthesis' in window && window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
    } else {
        console.log("No speech to resume or speech synthesis not supported");
    }
});
