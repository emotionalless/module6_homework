// Вписывается проверяемое число
var num = 12;

isPrime(num);

function isPrime(num) {
  
  if (num>1000) {
   return console.log("Данные не верны")
  }
  
  if (num == 1) {
       return console.log("Число 1 не является ни простым ни составным")
  }
    
  if (num == 0) {
       return console.log("Число 0 не является ни простым ни составным")
  }
  
  
  
  var amountOfRemain = 0;
  var k = 0;
  
  for (i=num; i>0; i--) {

    k = num % i;
      if (k == 0) {
        amountOfRemain++;
      }
      
  }


  
  if (amountOfRemain == 2) {
    return console.log(`Число ${num} простое`)
  }
  else {
    return console.log(`Число ${num} не простое`)
  }
}