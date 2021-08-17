export type TimeSlot={

} 
export type ShowTimings = "MORNING" | "AFTERNOON" | "EVENING" | "NIGHT"
export type BookedSeats = {
  [k in ShowTimings]:{seat:number, movie:string|null}
}


