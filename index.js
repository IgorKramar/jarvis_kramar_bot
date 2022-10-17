import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.post('/new-message', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.end();
    }

    try {
        await axios.post(
            'https://api.telegram.org/bot5765819601:AAGS9giKdfWlC161_oljdvZNYAq-RhNK9D4/sendMessage',
            {
                chat_id: message.chat.id,
                text: "Приветствую вас!",
            }
        );
        console.log('Message posted.');
        res.end('ok');
    } catch (error) {
        console.error("Error: ", error);
        res.end("Error: " + error);
    }
});

app.listen(3000, () => {
    console.log('Jarvis telegram bot listening on port 3000');
})