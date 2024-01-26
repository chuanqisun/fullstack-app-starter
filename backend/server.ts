import express from "express";
import cors from "cors";

const port = 9745;
const app = express();
app.use(cors())

app.get('/', (_req, res) => {
  res.send("Everything is working - you're ready for the interview!");
});

app.listen(port, () => {
  console.log(`Smoke test app listening on port ${port}`);
});