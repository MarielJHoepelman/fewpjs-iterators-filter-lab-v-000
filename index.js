// Code your solution here
// const findMatching = drivers.filter(function(driver) {
//   console.log(driver)
// });
//
function findMatching(drivers, driver){
  // console.log(drivers, driver)
  return drivers.filter(function(name){
    return name.toLowerCase() === driver.toLowerCase();
    // console.log(name.toLowerCase())
  });
}

// function findMatching (list, name) {
//   return list.filter(function (driverName) {
//     return driverName.toLowerCase() === name.toLowerCase();
//   });
// }
