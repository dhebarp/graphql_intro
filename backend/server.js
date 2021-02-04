const express = require('express')
const port = 5000
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')

const app = express()


app.use('/graphql', graphqlHTTP({
  schema
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})