// Code your solution here
// const findMatching = drivers.filter(function(driver) {
//   console.log(driver)
// });

function findMatching(drivers){
  drivers.filter(driver => driver.toLowerCase().includes(term.toLowerCase()))  
}
