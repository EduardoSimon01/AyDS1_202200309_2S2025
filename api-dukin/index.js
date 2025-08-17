const express = require("express");
const app = express();

app.get("/api/v2/info", (req, res) => {
  res.json({
    nombre: "Eduardo Simón",
    album_favorito: "MAWZ"
  });
});

// Salud
app.get("/", (_req, res) => res.send("API de Dukin operativa"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});
