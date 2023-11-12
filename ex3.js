var num1 = 1;


function firstNumFunc(num) {
  var num2 = 2;   // В этом задании не совсем понять откуда брать второе число для суммы, я решил
                  // что оно уже должно быть во второй функции
  var num1 = num;
  return SumFunc(num1, num2);
  

}

  function SumFunc(x, y) {
     var sum = 0;
     sum = x + y;
    return console.log(sum);
}


firstNumFunc(num1,SumFunc);