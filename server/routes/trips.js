import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import tripData from '../data/trips.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname= path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(tripData)
})

router.get('/:tripId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/trip.html'))
})

export default router