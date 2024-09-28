const express = require('express');
const cors = require('cors');
// const limiter = require('./rate-limiter');

const app = express();

app.use(cors());
// app.use(limiter());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    console.log(err);

    if (err) {
      if (err.output) {
        return res.status(err.output.statusCode || 500).json(err.output.payload);
      }

      return res.status(500).json(err);
    }
});

app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});

module.exports = app;