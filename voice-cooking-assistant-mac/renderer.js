
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

function startListening() {
  recognition.start();
}

recognition.onresult = function(event) {
  const command = event.results[0][0].transcript.toLowerCase();
  document.getElementById('output').textContent = 'You said: ' + command;
  handleCommand(command);
};

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function handleCommand(command) {
  if (command.includes('recipe')) {
    const query = command.replace('recipe', '').trim();
    speak(`Searching for ${query} recipe...`);
  } else if (command.includes('timer')) {
    const minutes = parseInt(command.match(/\d+/));
    if (!isNaN(minutes)) {
      speak(`Setting timer for ${minutes} minutes`);
      setTimeout(() => speak('Timer done!'), minutes * 60000);
    }
  } else {
    speak("Sorry, I didn't understand that.");
  }
}
