// A static property is a property that belongs to a class not an object
class Ride {
  static activeRide: number = 0;
  static start() {
    this.activeRide++;
  }
  static stop() {
    this.activeRide--;
  }
}

let ride1 = new Ride();
Ride.start();

let ride2 = new Ride();
Ride.start();
console.log(Ride.activeRide);
