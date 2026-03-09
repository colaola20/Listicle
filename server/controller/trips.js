import {pool} from '../config/database.js'

const getTrips = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM trips ORDER BY id ASC')
        console.log("loaded data")
        res.status(200).json(results.rows)
    } catch (error) {
        console.log("error")
        res.status(409).json({error: error.message})
    }
}

export default {
  getTrips
}