import { BookedSeats, } from "./timings"
export type date = "1-08-21" | "2-08-21" | "3-08-21" | "4-08-21" 
type Movie = "Movie1" 
export type AvailableSeats = {
  [key in date]:BookedSeats
}
// export type AvalaibleMovie = {
//   Movie:AvailableSeats
// }

