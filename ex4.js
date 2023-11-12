function numsInConsole (a,b) {
    var nums = b - a + 1;
    for (i=0;i!=nums;i++) {
      console.log(b-i)
    }
  }
  
  
  const IntevalNums = setInterval(numsInConsole,1000,5,10)

// Надеюсь, я правильно понял, что все числа должны выводиться сразу