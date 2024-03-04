const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send('TimeVaultNetwork backend running');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});