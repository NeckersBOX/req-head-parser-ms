'use strict';

const express = require ('express');
let app = express ();

app.get ('*', (req, res) => {
  res.writeHead (200, { 'Content-Type': 'application/json' });

  res.end (JSON.stringify ({
    ipaddress: JSON.stringify (req.connection),
    language: req.headers['accept-language'].split (',')[0],
    software: req.headers['user-agent'].split ('(')[1].split (')')[0]
  }));
});

app.listen (process.env.PORT || 8080);
