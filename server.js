import express from 'express';

const app = express();
const PORT = 4000;

app.use(express.static(`${__dirname}/dist/`));

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});