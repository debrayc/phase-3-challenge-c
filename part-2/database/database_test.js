const chai = require("chai")
const expect = chai.expect
const { getAllGuests, getAllRooms, getUpcomingRoomBookings } = require("./database.js")


describe('getAllGuests()', (done) => {
    it('retreives the list of guests from the hotel_db', () => {
        return getAllGuests().then( results => {
            expect(results.length).to.eql(20)
            expect(results[3]["name"]).to.eql('Charlton Millson')
            expect(guests[1]["email"]).to.eql('kpougher1@oakley.com')
            expect(guests[4]["email"]).to.eql('oreinhard4@twitter.com')
            done()
        })
    })
})
