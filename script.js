"use strict"
let options = {
  handle: 0,
  speed: 0,
  
  pause() {
    clearInterval(this.handle);
    console.log(this.handle + ' cleared.');
  },
  
  setSpeed() {
    this.speed = ele.value;
    clearInterval(this.handle);
    this.handle = setInterval(showSpeed, this.speed);
  },
}

let ele = document.getElementById('speed');
let pause = document.getElementById('pause');

ele.addEventListener('change', options.setSpeed.bind(options));
pause.addEventListener('click', options.pause.bind(options));

function showSpeed(){
  console.log(ele.value);
}

