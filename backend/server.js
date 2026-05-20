const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("🚔 Police Voice API Running");
});

app.use("/api/reports", reportRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});