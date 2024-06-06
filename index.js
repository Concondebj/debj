const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve les fichiers statiques depuis le répertoire racine du projet
app.use(express.static(path.join(__dirname, '')));

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Routes pour les autres pages
app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/page1.html'));
});

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/page2.html'));
});

app.get('/page3', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/page3.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
