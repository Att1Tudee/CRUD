const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

console.log('environment    ', process.env.ENVIRONMENT)
console.log('PORT    ', process.env.PORT)
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING)
if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}


const motdController = require('./controller/motd.controller')



const app = express();
const port = process.env.PORT || 3080;

app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());

app.get('/api/motds', (req, res) => {
    motdController.getMotds().then(data => res.json(data));
});

app.post('/api/motd', (req, res) => {
    console.log(req.body);
    motdController.createMotd(req.body.motd).then(data => res.json(data));
});

app.put('/api/motd', (req, res) => {
    motdController.updateMotd(req.body.motd).then(data => res.json(data));
});

app.delete('/api/motd/:id', (req, res) => {
    motdController.deleteMotd(req.params.id).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})