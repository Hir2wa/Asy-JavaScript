function monitorCount(rows, columns) {
  console.log(".......................");

  return rows * columns;
  console.log("............  these line won't be printed");
}

// how to call a function  + pass two values  //     monitorcount(2,4)
// no result until you console.log    // monitorcount(2,4)
//same to  // let c = 4;
//you won't see value of c until you print  it using console.log
//same to funtion unless you print the funtion no value
// function are values which means   they can be stored in variable  be returned and be printed
//when you ruturn no line below unless you  you put them in different block
let numOfMonitors = monitorCount(2, 4);
console.log(numOfMonitors);

//or
// console.log(monitorCount(2,4));
