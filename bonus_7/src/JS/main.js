// Бонусное задание номер 7 часть 1
// console.log(typeof 42)
// console.log(typeof 'blubery')
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof {})
// console.log(typeof null)
// console.log(typeof function(){})
// Бонусное задание номер 7 часть 2 
var width = 1;
var height = 2;

function getArea() {
  console.log(width*height);
}

for (var i = 0; i < 10; i++){
  width +=10;
}
console.log(width);
getArea();

