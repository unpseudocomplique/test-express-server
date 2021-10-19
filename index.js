  
const express = require('express');
require('dotenv').config();
const vueHistory = require('connect-history-api-fallback');
const app = express();
let hostname = null;
const productionFolder = './dist';
if (process.env.NODE_ENV === 'production') {
  hostname = '0.0.0.0';
} else {
  hostname = 'localhost';
}
const port = process.env.PORT || 8000;

app.use(express.static(productionFolder));
app.use(
  vueHistory({
    disableDotRule: true,
    verbose: true,
  })
);
app.use(express.static(productionFolder));

app.listen(port, hostname, () => {
  console.log(`App listening at ${hostname}:${port}`);
});