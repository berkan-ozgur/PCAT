const express = require('express')

const app = express();

const photo = {
    id: 1,
    name: "Photo Name",
    desc: "Photo Desc"
}

app.get('/', (req, res) => {
    res.send(photo)
})

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı...`)
})