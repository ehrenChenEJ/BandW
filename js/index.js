window.onload = function(){
  writing(indexType);
}
// 打字效果參數
let domType = document.querySelector('.topWord');
let dataType = 'WHICH DO YOU WANT TODAY?'.split('');
let indexType = 0;

function writing(indexType){

  // 當小於字串長度時，index+1
  if (indexType < dataType.length){
    domType.innerHTML += dataType[indexType];
    setTimeout(writing.bind(this),200,++indexType);
  }
}

// 引入JSON檔案
particlesJS.load('particles-js', './particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});



