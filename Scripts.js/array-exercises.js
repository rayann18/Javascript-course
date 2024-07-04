const nums = [10,20,30]
    nums.push(99)
    console.log(nums)

    const nms = [30,50,70]
    nms[nms.length-1] = 99
    console.log(nms)


    function getValue(array){
      return array[array.length-1];
    }
   console.log(getValue([3,6,9,12])) 
   console.log(getValue(['hey' , 'bug off', 'am coding']))

function arraySwap(array){
if(array.length > 1){
  const firstElement = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = firstElement
}
 return array
}
console.log(arraySwap([5,10,15,20]))
console.log(arraySwap(['ryan' , 'giggs']))



function addNum( array, num){
return array.map(x => x+num)
}

console.log(addNum([1,2,3,4] , 1))
console.log(addNum([1,2,3,4] , 4))
console.log(addNum([-2,-1,0,99] , 2))


// add arrays
const array= []

function addArrays(array1 , array2){
const length = Math.max(array1.length , array2.length)
const result = []
for(let i = 0; i < length; i++){
  const num1 = i < array1.length ? array[i] : 0;
const num2 = i < array2.length ? array[i] : 0;
result.push(num1+num2);
}
return result
}
console.log(addArrays([1,1,2] , [1,1,3]))
console.log(addArrays([1,2,3] , [4,5,6]))

//count positives



function countPositives(nums){
  return nums.filter(x => x>0).length
}

console.log(countPositives([1,-3,-6,5]))
console.log(countPositives([3,-2,-6, 10, -8, -22, 55]))

//min/max values

function minMax(nums){
  if(nums.length===0){
    return{min : null , max : null}
  }
  let min = nums[0]
  let max = nums[0]
  for (let num of nums){
    if(num<min){
      min=num
    }
    if(num=max){
      max=num
    }
  }
  return{min: min , max : max}
}
console.log(minMax([1,-3, 5]))
console.log(minMax([5,-6, 10]))


//count words

function countWords(words){
  const wordCount = {}
  for(let word of words){
    if(wordCount[word]){
      wordCount[word] += 1
    } else{wordCount[word] = 1}
  }
  return wordCount
}
console.log(countWords(['apple','grape','apple','apple']))


