
function checkEvenNum() {
    string = prompt();
        string = string++;
        typeOperand = typeof(string);
    
            if (isNaN(string))
              {
                console.log('Упс, кажется, вы ошиблись')
              }
            else {
              evenNumberCheck = string % 2;
              if (evenNumberCheck === 0 ) {
                console.log('Ваше число чётное')
              }
              else {
                console.log('Ваше число нечетное')
              }
            }
    }
    
    checkEvenNum();