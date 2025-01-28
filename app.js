const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));  
let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

app.get('/guess/:number', (req, res) => {
  const guess = parseInt(req.params.number);
  attempts++;

  if (guess < secretNumber) {
    return res.json({ message: 'Too low!' });
  } else if (guess > secretNumber) {
    return res.json({ message: 'Too high!' });
  } else {
    return res.json({ message: `Correct! It took you ${attempts} attempts.` });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
