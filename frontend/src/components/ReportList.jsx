import { useEffect, useState } from "react";
import axios from "axios";

export default function ReportList() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/reports"
      );
      setReports(res.data);
    };

    load();
  }, []);

  return (
    <div>
      <h3>📊 Reports</h3>

      {reports.map((r) => (
        <div
          key={r.id}
          style={{
            border: "1px solid gray",
            margin: 10,
            padding: 10,
          }}
        >
          <p><b>Raw:</b> {r.rawText}</p>
          <p><b>Name:</b> {r.formA.name}</p>
          <p><b>Location:</b> {r.formB.location}</p>
          <p><b>Incident:</b> {r.formC.incident}</p>
          <p><b>Time:</b> {new Date(r.time).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}