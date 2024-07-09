const myArray =  [10 ,20, 30]
 console.log(myArray)

 myArray[0]
 console.log(myArray[0])
 myArray[0] = 99
 console.log(myArray)

 let myArray =    [1, 'heelo world' , true , {name:'ryan'}, [1, 2]]
 console.log(typeof  [1, 2]); 
 
 console.log(Array.isArray( [1, 2]))

 console.log(myArray.length)

 myArray.push(100)
 console.log(myArray)

 myArray.splice(0 , 2)
 console.log(myArray) 

// loops 
 let i = 1;
 while( i <= 5) {
  console.log(i);
  i ++;
 }



 for(let i = 1; 1 <= 5; i++) {
  console.log(i)
 }

 let randomNumber = 0
 while(randomNumber < 0.5 ){
randomNumber = Math.random()
 }
 console.log(randomNumber)




 const todolist = ['make dinner' , 'wash dishes' , 'watch youtube']
 for(let i = 0; i <= todolist.length; i++){
const value =   todolist[i]

console.log(value)
 }
   


   const nums = [1,1,3]
   let total = 0

   for(let i = 0; i < nums.length; i++){
 const num = nums[i]
  total += num
   }
   console.log(total)




   const numsDoubled = []
   for(let i = 0; i<nums.length; i++){
    const num = nums[i]
    numsDoubled.push(num*2)
   }
   console.log(numsDoubled)
   


// Arrays Exercises

const arrayofNumbers = [10, 20 ,30]
console.log(arrayofNumbers)
arrayofNumbers[arrayofNumbers.length-1] = 99
console.log(arrayofNumbers)

function getlastvalueofArray(arrayofNumbers){
return arrayofNumbers [arrayofNumbers.length-1]
}

const newArray = [1,20,22,24,5]
function getlastvalueofnewArray(newArray){
  return newArray[newArray.length-1]
}

const Array = [1,20,22,34,5]
function getlastvalueofArray(Array){
  return Array[Array.length-1]
  
}
console.log(getlastvalueofArray[1,20,22,24,5])




function getLastvalue(array){
  if(array.length === 0){
    return undefined
  } else return array[array.length-1]
}
console.log(getLastvalue([1,20,22,34,5]))
console.log(getLastvalue(['hi' , 'hello', 'good']))
console.log(getLastvalue([]))



function arraySwap(array){
  if( array.length > 1){
    const firstElement =array[0];
    array[0] = array[array.length-1];
    array[array.length-1] = firstElement
  }
}
console.log(arraySwap([1, 20, 22,35,5]))
console.log(arraySwap(['hi' , 'hello', 'good']))


// arrays as refferences
const array1 = [1,2,3]
const array2 = array1.slice()
array2.push(4)
console.log(array1)
console.log(array2)

// destructuring an array

const array3 = [1,2,3]
const [firstValue , secondValue] = [1,2,3]


//break and continue in loops

for(let i=1;i<=1000000; i++){
if(i%3===0){
  continue
}


  console.log(i)
  if(i==8){
    break;
  }
}

let i = 1
while(i<=10){
  if(i%3===0){
    i++
  }
console.log(i)
  i++
}
//breaking out of a loop inside a function
function doubledArray(nums){

const numsDoubled = []
   for(let i = 0; i<nums.length; i++){
    const num = nums[i]
    if(num===0){
      break
    }
    numsDoubled.push(num*2)
   }
   return(numsDoubled)
}
console.log(doubledArray([1,1,3]))
console.log(doubledArray([2,2,5]))
