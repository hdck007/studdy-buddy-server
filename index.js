const express = require('express');
const app = express();
const { sequelize } = require('./models');
const port = 3000;

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => {
	sequelize.sync({ alter: true });
	console.log(`Server listening on port ${port}!`);
});
