// // типы данных
// // Числа, логические значения, а также значения null и undefined – это элементар
// // ные типы. Объекты, массивы и функции – это ссылочные типы.
//
// function print(msg) {
//   document.write('<div class="container">' + msg + '<br>' + '</div>');
// }
//
// // рекурсия
// function factorial(x) {
//   if (x <= 1) {
//     return 1;
//   }
//   return x * factorial(x - 1);
// }
//
// // сумма аргументов
// function sum() {
//   var result = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }
let a = function () {
  let arg = arguments.length;
  for (let i = 0; i < arg; i++) {
    console.log(arguments[i]);
  }
};
// категория детей (год от 0 до пох) -  резина
// оценки количества судей резина ( вставят оенки на каждый предмет )
// сортирую по оценке
// оенки судей  + (оценки) / на количество судей
// учатников резина
//



//

let result = a(3, 7, 2 ,4 , 5);
console.log(result);

// замыкания
(function () { // Это безымянная функция.
// Здесь располагается импортируемый программный код. Любые
// объявленные переменные станут свойствами объекта вызова, тем самым
// исключается вероятность конфликтов с глобальным пространством имен.
})(); // конец функционального литерала и его вызов.

