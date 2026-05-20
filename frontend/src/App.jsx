import VoiceInput from "./components/VoiceInput";
import ReportForm from "./components/ReportForm";
import ReportList from "./components/ReportList";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🚔 Police Voice Report System</h1>

      <VoiceInput />
      <ReportForm />
      <ReportList />
    </div>
  );
}