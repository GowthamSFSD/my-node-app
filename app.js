const express = require('express');
const app = express();
const PORT = 6000;

app.get('/', (req, res) => {
    res.send('Hello from Jenkins Deployment!');
});

app.listen(PORT,  () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

