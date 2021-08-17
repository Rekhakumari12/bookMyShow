import { bookMyShow } from '../../src/SeatBooking'
import { AvailableSeats } from '../../src/types/day'
describe("BookMyShow Test", () => {
    const initialState: AvailableSeats={
        "1-08-21" : {
            MORNING: {
                seat:0,
                movie:"Movie1"
            },
            AFTERNOON: {
                seat:48,
                movie:"Movie2"
            },
            EVENING: {
                seat: 3,
                movie: "Movie3"
            },
            NIGHT: {
                seat: 79,
                movie:"Movie4"
            }
        },
        "2-08-21" : {
            MORNING: {
                seat:1,
                movie:"Movie1"
            },
            AFTERNOON: {
                seat:47,
                movie:"Movie2"
            },
            EVENING: {
                seat: 2,
                movie: "Movie3"
            },
            NIGHT: {
                seat: 76,
                movie:"Movie4"
            }
        },
        "3-08-21" : {
            MORNING: {
                seat:2,
                movie:"Movie1"
            },
            AFTERNOON: {
                seat:4,
                movie:"Movie2"
            },
            EVENING: {
                seat: 37,
                movie: "Movie3"
            },
            NIGHT: {
                seat: 7,
                movie:"Movie4"
            }
        },
        "4-08-21" : {
            MORNING: {
                seat:78,
                movie:"Movie1"
            },
            AFTERNOON: {
                seat:100,
                movie:"Movie2"
            },
            EVENING: {
                seat: 35,
                movie: "Movie3"
            },
            NIGHT: {
                seat: 71,
                movie:"Movie4"
            }
        }
    }
    it("should return seat numbers which is available", () => {
        const availableSeat = bookMyShow("MORNING", initialState, "1-08-21")
        expect(availableSeat).toEqual({...initialState, seat: 1, movie:"Movie1"})
    })

    it("should return error if seat number not available", () => {
        const availableSeat = bookMyShow("AFTERNOON", initialState, "4-08-21")
        expect(availableSeat).toBe("No seats are available")
    })

})