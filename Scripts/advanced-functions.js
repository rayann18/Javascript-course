 
 
 //arrow functions 
 const toFahrenheitArrow = (celsius) => {
  return celsius*9 / 5 + 32
}
console.log(toFahrenheitArrow(30))
console.log(toFahrenheitArrow(86))

// event listeners
 document.getElementById('click-button').addEventListener('click', () => {
 
})

// Array methods
//for each
const num = [8,7,6,5,4].forEach(num => num *  2)
console.log(num)

//filter
const numberss = [2,4,6,8,10]
const evenNumbers = numberss.filter(num => num % 2===0 )
console.log(evenNumbers)

const newArray  = [1,3,6,9,12]
const squareNumbers = newArray.map(newArray=> newArray*newArray)
console.log(squareNumbers)

//closures
function createCounter(){
  let count = 0
  return function(){
    count++
    return count
  }
}
const counter = createCounter(412)
console.log(counter())


function addNum (array,num){ 
}

//advanced functions exercises

//////12m takes an array and returns an array where each number is increased by num
const numAdd = (array , num) => array.map(element =>element + num)
console.log(numAdd([1,2,3] , 2))
  console.log(numAdd([-1,0,333, 99] , 2))


  //12n ,   takes an array of strings and returns an array of strings where egg is removed
  const removeEggs = (foods) => foods.filter(food => food !=='eggs')
  console.log(removeEggs(['eggs', 'yams', 'bread', 'wurst']))

  //updated to remove two eggs only
  const removeEgg  = (foods) => {
    let eggCount = 0;
    return foods.filter(food => {
      if(food==='egg'){
        eggCount++;
        return eggCount>2
      }
      return true
    })
  }
  console.log(removeEgg(['egg', 'egg','yams', 'bread','egg', 'wurst', 'egg']))

  //creating multiply function
  const multiply = (num1, num2) => num1*num2
  console.log(multiply(2,3))
  console.log(multiply(7,10))

  //count positive function using for each
const countPositive = (nums) => {
  let  count = 0
  nums.forEach(num => {
    if(num>0)count++
  })
  return count
}
console.log(countPositive([1,-3,5,-11,4,7]))
console.log(countPositive([-2, -4 , -7,33,-1,-90]))

//practice
//for each 
const Cars = ['tata','VOLVO','BMW'];
Cars.forEach((element) =>{
  console.log(element);
});

const cars = ['tata', 'volvo', 'bmw']
  const newCars = cars.map((element) => {
    return element.toUpperCase()
  })
console.log(newCars)

//JAVASCRIPT ES6 FEATURES
// arrow functions 
function addition (a,b){
  return a+ b // ES5
}
const adition  = (a,b) => a+b // ES6


//Template literals
const name = 'john'
const greeting = `hello, ${name}`
console.log(greeting)

// Destructuring assignment 
const person = {Name : 'derrick' , age : '22'}
//extracting properties
const{Name, age} = person
console.log('Name :', Name, 'age :' , age)

//map methode creates a new array by applying map function to each element of existing array
const numbers1 = [1,2,3,4,5,6]
const doubled = numbers1.map(num => num*2)
console.log(doubled) 

// filter methode creates new array containing only elements that specify a condition ie even numbers in this array
const numbers2 = [1,2,3,4,5,6]
const evens = numbers2.filter(num => num %2==0)
console.log(evens)

//reduce method to accumulate the elements of an array into a single value
const data = [1,2,3,4,5]
const sum = data.reduce((acc, num) => acc+num , 0)
console.log(sum)

//destructuring arrays
const numbers3 = [1,2,3]
const[first,second,third] = numbers3

// optional chaining\\\\
const person1 = {name : 'ryan',
  address: {
    city : 'Mombasa',
    country : 'world resident'
  }
}
console.log(person1.address.city)


//using .at() method to retrieve an element at a specified index in a string or array
const str = 'hello world'
console.log(str.at(4))
console.log(str.at(-1))

//with arrays
const fruits  = ['apple', 'banana','cherries']
console.log(fruits.at(1))
console.log(fruits.at(-1))
console.log(fruits.at(3))

//js array methods
// 1. to string returns string with array valus seperated by commas
let array  = [1,2,3]
console.log( typeof(array.toString())) 

//join returns an array as string, any seperator can be specified ie comma, dashes, underscores
const array1 = ['hello ' , 'world']
console.log(array1.join('_'))
console.log(array1.join('**'))

// pop removes last element of array and returns removed element
let Array  = ['a', 'b','c']
console.log(Array.pop('c'))
console.log(Array) 

// push adds a new element to end of array and returns new length of array
let value = [1,2,3,4,55]
console.log(value.push(110))
console.log(value)

//shift removes first element of an array and returns removed element
let array2 = ['a','b','c']
console.log(array2.shift())
console.log(array2)

// unshift adds a new element at start of an array and returns new length of array
let array3 = [1,2,5,7,9]
console.log(array3.unshift(100))
console.log(array3)

//concat joins two or more arrays and returns a new array, joined arrays
let arry1 = [1,2,3] , arry2 = [4,5,6] , arr3= ['qwerty']
let concatarry = arry1.concat(arry2,arr3)
console.log(concatarry)

// sort sorts the elements of an array, strings in alphabetical and descending order
let nums  = [5,4,3,2,1], str1 = ['x','a','p']
console.log(nums.sort())
console.log(str1.sort())

// splice adds or removes array elements and returns removed items in an array if any
const splice = [1,2,3,4,5]
console.log(splice.splice('x','y','o'))

//slice returns selected elements in an array as new arrays
let numbers5 = [11,22,33,,44,55,]
let sliceArray= numbers5.slice(2,4)
console.log(sliceArray)

//reverse reverses the order of elements in an array
let original = [1,2,3,4,5,6]
console.log(original.reverse())

//is Array checks if an object is an array and returns true else false
let object = [1,2,3,4,5]
let string = 'this is a string'
console.log(Array.isArray(object))
console.log(Array.isArray(string))
  