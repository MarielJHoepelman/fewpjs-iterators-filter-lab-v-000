// Code your solution here
// const findMatching = drivers.filter(function(driver) {
//   console.log(driver)
// });

function findMatching(drivers){

}

const findMatching = drivers.filter((driver) => {
  if (driver.toString().indexOf(searchString).toLowerCase !== -1) return true
})
