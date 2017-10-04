const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/hotel_db'
const db = pgp(connectionString)

const getAllGuests = () => db.any('SELECT id, guest_name, email FROM guests;')
const getAllRooms = (isAvailable) => db.any('SELECT * FROM availability ORDER BY room_number WHERE Availability=true ORDER BY room_number')
const getUpcomingRoomBookings = () => db.any('SELECT rooms.room_number, guests.guest_name FROM bookings WHERE check_in >= CURRENT_DATE')

module.exports = { getAllGuests, getAllRooms, getUpcomingRoomBookings }