<<<<<<< HEAD
function myCallBack(callback) {
  setTimeout(() => {
    callback("hello world");
  }, 1000);
}

myCallBack((name) => {
  console.log(name);
});
=======
// let pizza;
// function orderPizza() {
//   console.log("order pizza");

//   setTimeout(() => {
//     pizza = "the Pizza";
//     console.log("pizza was orderd");
//   }, 5000);
//   console.log("Order placed for " + pizza);
// }

// orderPizza();
// console.log("Welcome");
// console.log("call coli");

// console.log(`Eat ${pizza}`);

//by applying the asychronous operation

function orderPizza(callback) {
  setTimeout(() => {
    const pizza = "pizza";
    callback(pizza);
  }, 2000);
}

function pizzaReady(ToEat) {
  console.log(`eat the ${ToEat}`);
}
console.log("call coli");
orderPizza(pizzaReady);

//there is one problem in promises which is called callbackhell
//these is problem is when we have more than 2 things that depenfd to each other that where the issue comes
//we will see many things which can lead to headache on reading

function thind1(callback) {
  //call pizza shop
  callback();
}

function thing2(callback) {
  //order the pizza
  callback();
}

function thing3(callback) {
  callback();
  //wait pizza  or eat pizza
}

//the calls the operation next to me once am done
//invaled piramid

thind1(() => {
  thing2(() => {
    thing3(() => {
      console.log("finaaly done");
    });
  });
});

// thing to explain for me why do we need to create another function  arrow function inn theses callback hell am creating why
//whetheas in previos examples  i wasn't needinng i was just passing the call back function i have just create please

//simple question may these work
//thind1(thing2);
// if we only neeed these
//it could work only if the thing2 function does not have also a callback right

// to avoid thes me need to use promises to avoid callback hell
//which help us to manage asy operation well
>>>>>>> a5cadd74282c01a742150d0a5da45e028dddfd39
