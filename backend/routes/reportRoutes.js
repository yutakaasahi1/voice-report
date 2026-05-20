const express = require("express");
const router = express.Router();

let reports = [];

// GET all
router.get("/", (req, res) => {
  res.json(reports);
});

// POST report
router.post("/", (req, res) => {
  const { text } = req.body;

  const parsed = parseVoice(text);

  const report = {
    id: Date.now(),
    rawText: text,
    ...parsed,
    time: new Date(),
  };

  reports.push(report);

  res.json(report);
});

// 🧠 SMART PARSER (FORM A/B/C)
function parseVoice(text) {
  text = text.toLowerCase();

  // FORM A - NAME
  let name =
    text.match(/nama saya ([a-z ]+)/)?.[1] || "";

  // FORM B - LOCATION
  let location =
    text.match(/di ([a-z ]+)/)?.[1] || "";

  // FORM C - INCIDENT
  let incident = "";

  if (text.includes("kemalangan")) {
    incident = "Kemalangan jalan raya";
  } else if (text.includes("rompak")) {
    incident = "Kes rompakan";
  } else if (text.includes("curi")) {
    incident = "Kes kecurian";
  } else {
    incident = "Tidak dikenalpasti";
  }

  return {
    formA: { name },
    formB: { location },
    formC: { incident },
  };
}

module.exports = router;