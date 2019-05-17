require('dotenv').config();
const express = require('express');
const massive = require('massive');
const controller = require('./controller')
const {SERVER_PORT,CONNECTION_STRING}= process.env
const app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

massive(CONNECTION_STRING).then((database) => {
  app.set('db',database)
  console.log('database connected')
  app.listen(SERVER_PORT , () => console.log(`Success! Server running at Port:${SERVER_PORT}`))
})

app.get('/api/products', controller.getAll);
app.post('/api/products', controller.addProduct);
app.delete('/api/product/:id' , controller.deleteProduct)