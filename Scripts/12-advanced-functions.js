const buttonElement =  document.querySelector('.js-button').addEventListener('click' , () => {
  console.log('click');
 })

const eventListener =  buttonElement.removeEventListener('click' , () => {})

  function greeting(){
    console.log('hello')
  }
  greeting()

  const num = 2;
  const function1 = function(){
    console.log('hello 2');
  }
  console.log(function1)
  console.log(typeof(function1))
  function1();


const object1 = {
num : 2, 
fun : function (){
  console.log('hello 3')
}
}
object1.fun()



function display(param){
console.log(param)
}
display(2); // passing a value into a function

function run(param){
param()
}
run (function (){
console.log('hello 4')
}

)


setTimeout(function() {
console.log('timeout')
console.log('timeout 2')
} , 3000);

console.log('next line')


setInterval(
function (){
  console.log('interval')
} , 3000);

console.log('next line 2')

[
'make dinner' , 'wash dishes' , 'watch youtube'
].forEach((value,index ) => {

if(value==='wash dishes') {
return;
}


console.log(index)
console.log(value);
}

)
//1
const add  =  function(){
console.log(2+3)
}
add();

2//
function runTwice(add){
add()
console.log(2+3)
}
runTwice(add);

//3

setInterval( function(click){
1000
}

)


//6
const regularfunction = function(param) {
console.log('hello');
return 5
}




const arrowfunction = (param , param2) => {

console.log('hello');
return 5
}
arrowfunction()


const onePram = param => {
console.log(param+1)
}
onePram(2)


const oneLine = () => {return 2+3 }
console.log(oneLine())


const object2 = {
method : () => {

}, 
method (){ // shorthand method syntax

}
}


//array method filter
console.log([1,-3 , 5].filter((value,index) => {
/*
if(value>=0){
  return true;
} else{return false} 
*/
return value >= 0
}))

console.log([1,2,3].map((value, index) => {
return value * 2
}))
console.log([1,2,3].map((value => value*2)))
