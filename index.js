// Code your solution here
// const findMatching = drivers.filter(function(driver) {
//   console.log(driver)
// });
//
function findMatching(drivers, driver){
  return drivers.filter(function(driverName){
    return driverName.toLowerCase() === driver.toLowerCase();
  });
}
//same as above
const findMatching = (drivers, driver) => {
  return drivers.filter(driverName => {
    return driverName.toLowerCase() === driver.toLowerCase();
  });
}
//same as above
const findMatching = (drivers, driver) => {
  return drivers.filter(driverName => driverName.toLowerCase() === driver.toLowerCase());
}
