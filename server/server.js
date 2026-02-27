import express from 'express'
import tripsRouter from './routes/trips.js'

const app = express()

app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Server\'s root Page</h1>')
})
app.use('/trips', tripsRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})