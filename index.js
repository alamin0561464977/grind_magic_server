const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;


app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
    res.send('Grind Magic App Running');
});

app.listen(port, () => console.log(`Grind Magic App is Running on Port: ${port}`));