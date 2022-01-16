console.log("hello");
let car = {
  name: "Maruti",
  topspeed: 69,
  run: function (name = "default") {
    console.log("Runing", name);
  },
};
console.log(car.name);
console.log(car.run("sdf"));
// general constructer
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.topspeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} is runing`);
  };
  this.analyze = function () {
    console.log(`This car is slower by ${200 - this.topspeed} then mercedes`);
  };
}
car1 = new GeneralCar("Nissan", 180);
car2 = new GeneralCar("Marutu Alto", 180);
console.log(car1);
console.log(car2);
