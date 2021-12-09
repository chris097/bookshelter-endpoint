const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());


app.listen(() => {
  console.log("Server listening to port 4040...")
})