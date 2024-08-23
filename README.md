# Audible.Ai Chrome Extension
This Chrome extension allows users to convert spoken words into text, send the text to the Groq LLM for generating a response, and then convert the LLM's text response back into speech. The extension also features play, pause, and resume controls for audio playback.

## Features

Speech-to-Text Conversion: 
Converts spoken input into text using built-in browser speech recognition.
Text Response Generation: Sends the transcribed text to Groq LLM for a generated response.
Text-to-Speech Conversion: Converts Groq LLM's response back into speech.
Playback Controls: Includes play, pause, and resume buttons for controlling the speech playback.

## Installation

Download or clone this repository to your local machine.
Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode using the toggle switch in the top right corner.
Click the Load Unpacked button and select the directory where this extension is located.
The extension will be added to Chrome, and the icon will appear in the toolbar.
Usage
Click on the extension icon in the toolbar to start.
Press the Start Listening button to activate speech recognition.
Once you finish speaking, the transcribed text will automatically be sent to the Groq LLM for processing.
The response from the LLM will be spoken aloud using text-to-speech.
Use the Play, Pause, and Resume buttons to control the speech playback.

## Requirements

Chrome Browser with Web Speech API support.
Groq LLM API access (ensure you have the necessary API credentials).
Microphone permissions for capturing speech input.

## How It Works
Speech-to-Text: Uses Chrome's Web Speech API to capture and transcribe spoken input.
LLM Integration: The transcribed text is sent to the Groq LLM API to generate a text response.
Text-to-Speech: Once the LLM's response is received, the browser's Speech Synthesis API is used to convert the response into speech.
Playback Controls: HTML audio elements are used to handle play, pause, and resume functionality.

## Controls
Start Listening: Begin recording speech for conversion.
Play: Plays the synthesized speech output.
Pause: Pauses the speech playback.
Resume: Resumes paused speech playback.

## API Integration
Ensure you have the necessary API credentials for the Groq LLM. You will need to provide these credentials in the extension's configuration file (config.js or similar) to enable communication with the API.

Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure your changes are well-tested.
