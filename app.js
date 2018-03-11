const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('CRUD v0.0.1'))

app.listen (8000, () => console.log('CRUD listening on port 8000'))
