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
    check_in date,
    check_out date
);


