import { useState } from "react";
import axios from "axios";

export default function ReportForm() {
  const [text, setText] = useState(
    localStorage.getItem("voiceText") || ""
  );

  const submit = async () => {
    await axios.post(
      "http://localhost:5000/api/reports",
      { text }
    );

    alert("Report saved!");
    setText("");
    localStorage.removeItem("voiceText");
  };

  return (
    <div>
      <h3>📄 Report Form</h3>

      <textarea
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <button onClick={submit}>
        Submit Report
      </button>
    </div>
  );
}