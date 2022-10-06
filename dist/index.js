"use strict";
class Ride {
    static start() {
        this.activeRide++;
    }
    static stop() {
        this.activeRide--;
    }
}
Ride.activeRide = 0;
let ride1 = new Ride();
Ride.start();
let ride2 = new Ride();
Ride.start();
console.log(Ride.activeRide);
//# sourceMappingURL=index.js.map