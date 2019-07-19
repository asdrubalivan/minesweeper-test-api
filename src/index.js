const express = require('express');

const app = express();
const routes = require("./routes");

app.use("/minesweeper", routes);
app.get('/', (req, res) => res.json('Hello world'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));
