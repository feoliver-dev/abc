let buffer = '0';
let runningTotal = 0;
let previousOperator=null;
const screen = document.querySelector('.screen');

//checar se o valor é num
function buttonClick(value){
  if (isNaN(parseInt(value))){
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender(); 
}

function handleNumber(number){
  if (buffer === '0') {
    buffer = number;
  } else {
    buffer += number;
  }
}

function handleMath (value){
  if (buffer === '0'){
    //do nothing
    return;
  }

  const intBuffer = parseInt(buffer);
  if(runningTotal===0){
    runningTotal = intBuffer;
  } else{
    flushOperation(intBuffer);
  }

  previousOperator = value;
  buffer='0';
}

function flushOperation(intBuffer){
  if (previousOperator === '+'){
    runningTotal += intBuffer
  } else if (previousOperator === '-'){
    runningTotal -= intBuffer
  } else if (previousOperator === '×'){
    runningTotal*=intBuffer
  } else if (previousOperator === '÷'){
  runningTotal /= intBuffer;
}
}                                  
// função dos simbolos
function handleSymbol(symbol){
  switch(symbol){
    case 'C':
      buffer = '0';
      break;
    case '=':
      if (previousOperator === null){
        //need do number to do math
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;
    case '←':
      if(buffer.length === 1){
        buffer = '0';
      } else {
        buffer = buffer.substring(0, buffer.length-1);
      }
      break;
    case '+':
    case '-':
    case '÷':
    case '×':
      handleMath(symbol);
      break;
  }
  
}

function rerender(){
  screen.innerText = buffer;
}

function init() {
  console.log('hi!')
  document
  .querySelector('.calc-buttons').addEventListener("click", function(event){
    buttonClick(event.target.innerText);
  });
}






init();



/* funcao calculadora, enquanto for verdadeiro(enquanto o usuario estiver clicando/usando), chama outras funções,
ele possui uma array pra armazenar variveis e manipulá-las? 

*/ 

// botoes numericos, q eventos eles causam,

// func result
// função soma
// função subtrair
// função dividir
// função multiplicar
// func equal para enviar a const resultado para o result