const express = require('express' 4.16.2 )
const app = express()

app.get('/', (req, res) => res.send('CRUD v0.0.1'))

app.listen (3000, () => console.log('CRUD listening on port 8000'))
