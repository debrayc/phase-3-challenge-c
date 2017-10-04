DROP DATABASE IF EXISTS hotel_db;
CREATE DATABASE hotel_db;

\c hotel_db

CREATE TABLE rooms(
    id SERIAL PRIMARY KEY,
    room_number VARCHAR(2),
    capacity INTEGER
);

CREATE TABLE guests(
    id SERIAL PRIMARY KEY,
    guest_name VARCHAR(60),
    email VARCHAR(60)
);

CREATE TABLE bookings(
    id SERIAL PRIMARY KEY,
    room_id INTEGER REFERENCES rooms(id),
    guest_id INTEGER REFERENCES guests(id),
    check_in DATE,
    check_out DATE
);

CREATE VIEW availability AS
  SELECT rooms.room_number, rooms.capacity, 
    CASE 
        WHEN bookings.check_in <= CURRENT_DATE AND CURRENT_DATE < bookings.check_out THEN FALSE
        ELSE TRUE
    END
  AS Availability FROM bookings JOIN rooms ON rooms.id = bookings.room_id;

