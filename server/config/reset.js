import pool from './database.js'
import './dotenv.js'
import tripData from '../data/trips.js'

const createTripsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS trips;

        CREATE TABLE IF NOT EXISTS trips (
            id SERIAL PRIMARY KEY,
            locationName VARCHAR(255) NOT NULL,
            country VARCHAR(255) NOT NULL,
            type VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            imageURL TEXT NOT NULL,
            tip TEXT NOT NULL,
            submittedBy VARCHAR(255) NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 trips table created successfully')
    } catch (err) {
        console.error('⚠️ error creating trips table', err)
    }
}

const seedTripsTable = async () => {
    await createTripsTable()

    tripData.forEach((trip) => {
        const inserQuery = {
            text: 'INSERT INTO trips (locationName, country, type, description, imageURL, tip, submittedBy) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            trip.locationName,
            trip.country,
            trip.type,
            trip.description,
            trip.imageURL,
            trip.tip,
            trip.submittedBy
        ]

        pool.query(inserQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting trip', err)
                return
            }

            console.log(`✅ ${trip.locationName} added successfully`)
        })
    })
}

seedTripsTable()