const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            const dogImageUrl = data.message;
            res.send(`<h1>Random Dog Image</h1><img src="${dogImageUrl}" alt="Random Dog">`);
        } else {
            res.send('Failed to fetch dog image.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

