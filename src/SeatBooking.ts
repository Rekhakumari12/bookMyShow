import { ShowTimings, BookedSeats } from '../src/types/timings'
import { AvailableSeats, date } from '../src/types/day'
import { totalSeats} from './constant/constant'
export const getShowInfo = (timeSlot: ShowTimings, state:AvailableSeats, currentDate:date) => {
    if(state[currentDate][timeSlot]["seat"]< totalSeats){
        const updatedState = {
            ...state,
            seat: state[currentDate][timeSlot]["seat"] + 1,
            movie: state[currentDate][timeSlot]["movie"]
        }
        return updatedState
    }else{
        return "No seats are available"
    }
}

export const addMovieInformation = (timeSlot:ShowTimings, state:AvailableSeats, movieName:string, currentDate:date)=> {
    const {movie, seat} = state[currentDate][timeSlot]
    if(movie !== null && seat===0){
        return `Movie is already assigned to this timeslot`
    }
    else{
        const updatedState = {
            ...state,
            movie: movieName,
            time:timeSlot,
            day:currentDate
        }
        return updatedState
    }
    
}
