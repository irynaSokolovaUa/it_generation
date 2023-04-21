var worker = new Worker("worker.js");

let first = document.querySelector("#first");
let second = document.querySelector("#second");
let result = document.querySelector("#result");

let add = document.querySelector("#add");
let subtract = document.querySelector("#subtract");
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");


first.onchange = function(){
    worker.postMessage([first.value, second.value, null]);
    console.log('Message posted to worker');

}

second.onchange = function() {
    worker.postMessage([first.value, second.value, null]);
    console.log('Message posted to worker');
  }

add.addEventListener("click", function(){
    worker.postMessage([first.value,second.value, "add"]);
    console.log('Message posted to worker');
});
subtract.addEventListener("click", function(){
    worker.postMessage([first.value,second.value, "subtract"]);
    console.log('Message posted to worker');
});
multiply.addEventListener("click", function(){
    worker.postMessage([first.value,second.value, "multiply"]);
    console.log('Message posted to worker');
});
divide.addEventListener("click", function(){
    worker.postMessage([first.value,second.value, "divide"]);
    console.log('Message posted to worker');
});

worker.onmessage = function (e) {
    result.textContent = e.data;
    console.log('Повідомлення отримано');
};
