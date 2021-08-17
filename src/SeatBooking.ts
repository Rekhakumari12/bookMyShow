import { ShowTimings, BookedSeats } from '../src/types/timings'
import { AvailableSeats, date } from '../src/types/day'
import { totalSeats} from './constant/constant'
export const bookMyShow = (timeSlot: ShowTimings, state:AvailableSeats, currentDate:date) => {
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
