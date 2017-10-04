# phase-3-challenge-c
Solution repo for the Phase 3 Challenge version C

## General Requirements

- [x] __10:__ Solution is in a public repository called `phase-3-challenge-c`.
- [x] __10:__ Solution repository has 3 folders: `part-1`, `part-2`, and `part-3`.
- [x] __10:__ Solution repository includes a `.gitignore` ignoring files that don't shouldn't be committed (e.g. `node_modules/`, `*.log` files).
- [x] __10:__ Parts 1 and 2 have their own `package.json` specifying dependencies.
- [x] __20:__ Git history shows frequent commits.

## Part 1: Simple web app

### Requirements

- [x] __10:__ All files are stored under the `part-1/` folder
- [x] __10:__ All dependencies are specified in a `package.json` file
- [x] __10:__ Web server can be started with `npm start` command
- [x] __20:__ GET requests to the `/api/shout/:word` route responds with  content type `text/plain`, as described in the example above
- [x] __80:__ POST requests to the `/api/array/merge` merge the two arrays provided in the request body and responds with the result. An invalid input should return a 400 response.

## Part 2: Command Line Hotel Management System

### Requirements
- [x] __10:__ All files are stored under the `part-2/` folder
- [x] __10:__ Database schema (all `CREATE TABLE` statements) is defined in a file `schema.sql`
- [x] __10:__ SQL statements to insert seed data into all tables is added to the file `load-data.sql` (either create your own seed data or use the files provided: [rooms.csv][hotel-rooms] | [bookings.csv][hotel-bookings] | [guests.csv][hotel-guests])
- [x] __10:__ All database query functions are written in a file `database.js`, and tests for queries are written in a file `database_test.js`
- [x] __10:__ Tests can be run with the command `$ npm test`

User Stories: Ensure that your schema design can satisfy the following scenarios
- [x] __10__: As a hotel manager I can get a list of all guests
- [ ] __10__: As a hotel manager I can get a list of all rooms
- [ ] __10__: As a hotel manager I can see which rooms have been booked by which guests, along with their check-in and check out dates

Command line interface requirements
- [x] __10__: There is a Node script called `hotel.js` that can be called with different commands
- [x] __20__: Command `guests` has been implemented to the above specifications
- [ ] __30__: Command `rooms` has been implemented to the above specifications
- [ ] __30__: Command `bookings` has been implemented to the above specifications

Write tests with [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/) in `database_test.js` that assert:
- [ ] __20__: The database function for the command `guests` is tested
- [ ] __20__: The database function for the command `rooms` is tested
- [ ] __20__: The database function for the command `bookings` is tested

## Part 3: Web interface for hotel manager

### Requirements

- [x] __10:__ All files are stored under the `part-3/` folder
- [x] __20:__ No third party CSS or JS libraries are used (all code must be written from scratch)
- [x] __10:__ HTML, CSS, and JS are separated into their own files.
- [x] __20:__ Clicking on the "Book" button for a room will open the "Booking" modal with the room info automatically inserted (room number and nightly rate)
- [x] __20:__ Users can select a check-in date (using an HTML5 date input) and a number of nights
- [x] __20:__ The "Total" in the "Booking" modal shows the total sum (formula: nightly rate multiplied by number of nights)
- [x] __20:__ Whenever the number of nights changes, the total is updated automatically
- [x] __20:__ Clicking on the "X" button in the "Booking" modal closes the modal
