import { getShowInfo, addMovieInformation } from '../../src/SeatBooking'
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
                movie:"Movie1"
            },
            EVENING: {
                seat: 3,
                movie: "Movie1"
            },
            NIGHT: {
                seat: 79,
                movie:"Movie1"
            }
        },
        "2-08-21" : {
            MORNING: {
                seat:1,
                movie:"Movie1"
            },
            AFTERNOON: {
                seat:47,
                movie:"Movie1"
            },
            EVENING: {
                seat: 2,
                movie: "Movie1"
            },
            NIGHT: {
                seat: 76,
                movie:"Movie1"
            }
        },
        "3-08-21" : {
            MORNING: {
                seat:0,
                movie:null
            },
            AFTERNOON: {
                seat:4,
                movie:"Movie1"
            },
            EVENING: {
                seat: 37,
                movie: "Movie1"
            },
            NIGHT: {
                seat: 7,
                movie:"Movie1"
            }
        },
        "4-08-21" : {
            MORNING: {
                seat:78,
                movie:"Movie1"
            },
            AFTERNOON: {
                seat:100,
                movie:"Movie1"
            },
            EVENING: {
                seat: 35,
                movie: "Movie1"
            },
            NIGHT: {
                seat: 0,
                movie:"Movie2"
            }
        }
    }
    it("should return seat numbers which is available", () => {
        const availableSeat = getShowInfo("MORNING", initialState, "1-08-21")
        expect(availableSeat).toEqual({...initialState, seat: 1, movie:"Movie1"})
    })

    it("should return error if seat number not available", () => {
        const availableSeat = getShowInfo("AFTERNOON", initialState, "4-08-21")
        expect(availableSeat).toBe("No seats are available")
    })

    it("should add the movie information", () => {
        const setMovieInfo = addMovieInformation("MORNING", initialState, "Movie2", "3-08-21")
        expect(setMovieInfo).toEqual({...initialState, time: "MORNING", movie: "Movie2", day:"3-08-21"})
    })

    it("should give error message if the movie is already added", () => {
        const setMovieInfo = addMovieInformation("NIGHT", initialState, "Movie2", "4-08-21")
        expect(setMovieInfo).toEqual("Movie is already assigned to this timeslot")
    })
})