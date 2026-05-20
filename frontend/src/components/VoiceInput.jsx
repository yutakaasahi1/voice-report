import { useState } from "react";

export default function VoiceInput() {
  const [text, setText] = useState("");

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

      //buka mic laptop, dengar suara, convert ke text
    const recognition = new SpeechRecognition();

    recognition.lang = "ms-MY"; // lebih stabil dari ms-MY
    recognition.start();

    //habis bercakap sahaja, dia akan dapat text
    recognition.onresult = (e) => {
      const transcript =
        e.results[0][0].transcript;

      setText(transcript);
      localStorage.setItem("voiceText", transcript);
    };
  };

  return (
    <div>
      <h3>🎤 Voice Input</h3>

      <button onClick={startVoice}>
        Start Voice
      </button>

      <p>{text}</p>
    </div>
  );
}