import * as express from 'express';
// const jsonParser = require('body-parser').json();
const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.listen(3000);
