// By using index signature we can add dynamic property to an object in typescript;
class SeatAssignment {
  [seatNumber: string]: string;
}
let seat = new SeatAssignment();
seat.A1 = "Abhishek";
seat.A2 = "Shweta";
