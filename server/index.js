const express = require('express')
const cors = require('cors')

const app = express()

const port = 3693
const data = require('./data.json')

app.use(cors())
app.use(express.json())

app.get('/api/:first/:last', (req, res) => {
    const {first, last} = req.params
    res.status(200).send(data[`${first} ${last}`])
})

app.listen(port, () => console.log(`Server running on ${port}`))