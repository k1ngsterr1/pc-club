const express = require('express');
const twilio = require('twilio');
const app = express();
const port = 5000;

const client = new twilio('ACde4e0dd188458d20626e96d4c72e5a46', 'f3c8aea4c7392437b2248e6f27c6c3da');

app.use(express.json());

app.post('/sendCode', (req, res) => {
    const { phoneNumber } = req.body;

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    client.messages
        .create({
            body: `Ваш код для подтверждения: ${code}`,
            from: 'whatsapp:+14155238886',
            to: `whatsapp:${phoneNumber}`
        })
        .then((message) => {
            console.log(`Message sent: ${message.sid}`);
            res.status(200).send({ message: 'Code sent successfully!' });
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            res.status(500).send({ message: 'Error sending code.' });
        });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
