// Code your solution here
// function findMatching(drivers, driver){
//   return drivers.filter(function(driverName){
//     return driverName.toLowerCase() === driver.toLowerCase();
//   });
// }

//same as above
// ES6 notation with explicit return
// const findMatching = (drivers, driver) => {
//   return drivers.filter(driverName => {
//     return driverName.toLowerCase() === driver.toLowerCase();
//   });
// }

//same as above with one implicit return
// const findMatching = (drivers, driver) => {
//   return drivers.filter(driverName => driverName.toLowerCase() === driver.toLowerCase());
// }

//same as above full implicit return
const findMatching = (drivers, driver) =>
  drivers.filter(driverName => driverName.toLowerCase() === driver.toLowerCase());
