// Ensure the browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
    alert('Web Speech API is not supported by this browser. Please use Chrome.');
} else {
    // Function to inject iframe for microphone permission
    function injectMicrophonePermissionIframe() {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("hidden", "hidden");
        iframe.setAttribute("id", "permissionsIFrame");
        iframe.setAttribute("allow", "microphone");
        iframe.src = chrome.runtime.getURL("src/pages/permission/index.html");
        document.body.appendChild(iframe);
    }

    // Inject the iframe for microphone permissions when the extension is loaded
    injectMicrophonePermissionIframe();

    const startButton = document.getElementById('start-record-btn');
    const resultDiv = document.getElementById('request');

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false; // Set to true if you want continuous recognition
    recognition.interimResults = false; // Set to true if you want interim results
    recognition.lang = 'en-US';

    // Event handler for when recognition starts
    recognition.onstart = function() {
        startButton.innerHTML = 'Listening...';
        startButton.disabled = true;
    };

    // Event handler for when recognition ends
    recognition.onend = function() {
        startButton.innerHTML = 'Start Recognition';
        startButton.disabled = false;
    };

    // Event handler for when recognition produces a result
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        resultDiv.innerHTML = transcript;
    };

    // Event handler for errors
    recognition.onerror = function(event) {
        console.error('Recognition error:', event.error);
        resultDiv.innerHTML = 'Error occurred in recognition: ' + event.error;
    };

    // Start recognition when the button is clicked
    startButton.addEventListener('click', function() {
        recognition.start();
    });
}
