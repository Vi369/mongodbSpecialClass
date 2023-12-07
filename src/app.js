import express from 'express'
const app = express()


app.get('/', (req, res) => {
    res.send('<h1>Hello World from express server</h1>')
})
  
app.get('/instagram', (req, res) => {
      res.send('<h1>awesome_vikas369</h1>')
})

export default app;

    
