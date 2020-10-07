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
const findMatching = drivers.filter(driver => {
  console.log(drivers, driver)
  return driver
})
