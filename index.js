// Code your solution here
// const findMatching = drivers.filter(function(driver) {
//   console.log(driver)
// });
//
function findMatching(drivers, driver){
  // console.log(drivers, driver)
  return drivers.filter(function(driverName){
    return driverName.toLowerCase() === driver.toLowerCase();
    // console.log(name.toLowerCase())
  });
}

const findMatching = (drivers, driver) => {
  return drivers.filter(driverName => driverName.toLowerCase() === driver.toLowerCase());
}
