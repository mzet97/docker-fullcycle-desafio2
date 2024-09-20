const express = require('express');
const db = require('./src/db');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  await db.insertPerson("Full Cycle");
  const people = await db.getPeople();
  let peopleList = '<ul>';
  people.forEach(person => {
    peopleList += `<li>${person.name}</li>`;
  });
  peopleList += '</ul>';

  res.send(`<h1>Full Cycle Rocks!</h1> ${peopleList}`);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
