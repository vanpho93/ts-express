"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// const jsonParser = require('body-parser').json();
const app = express();
app.get('/', (req, res) => {
    res.send('hello');
});
app.listen(3000);
//# sourceMappingURL=index.js.map