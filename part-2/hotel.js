const { getAllGuests, getAllRooms, getUpcomingRoomBookings } = require("./database/database.js")

const guests = () => {
    let idLength = `ID`.length
    let guestNameLength = `Guest Name             `.length
    let emailLength = `EMAIL                                `.length
    let line = `|----+-------------------------+---------------------------------------|`
    let header = `| ID | Guest Name              | EMAIL                                 |`
    console.log(line)
    console.log(header)
    console.log(line)
    let list = getAllGuests().then(guests => {
        guests.map(guest => {
            console.log("| " + (" ").repeat(idLength - guest.id.toString().length) + guest.id + " | " + guest.guest_name + (" ").repeat(guestNameLength - guest.guest_name.length) + " | " + guest.email + (" ").repeat(emailLength - guest.email.length) + " | ")
        })
    }).then(() => console.log(line))
}
let script = process.argv[2]
switch (script) {
    case "guests": guests()
        
        break;
    case "guests": guests()
        
        break;

    default:
        break;
}