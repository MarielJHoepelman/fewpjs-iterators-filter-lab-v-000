// Code your solution here
// const findMatching = drivers.filter(function(driver) {
//   console.log(driver)
// });
//
function findMatching(drivers, driver){
  return drivers.filter(function(name){
    // return name.toLowerCase() === driver.tolowercase();
    console.log(name)
  });
}

function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
