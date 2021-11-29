const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.get('/', (req, res) => {
  const reactApp = fs.readFileSync(path.resolve(__dirname, "public", "index.html"), "utf8");
  res.send(reactApp);
});

app.get('/api/v0/test', (req, res) => {
  res.json({ message: "test" });
});

app.use(express.static(path.resolve(__dirname, 'public')));
app.listen(3000,  () => console.log("Example app listening on port 3000!"));