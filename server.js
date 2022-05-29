const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname));
const port = process.env.PORT || 5000;

app.get('*', (req, res) => {
    res.sendFile(path.resolve('index.html'));
});
app.listen(port, () =>
    console.log(`Server is running on: http://localhost:${port}`));