//break


const toyBox = ['blue car' , 'red car ', 'gray car']
for(let i = 0; i<toyBox.length; i++){
  if(toyBox[i]=== 'red car'){
    break
  }
  console.log('looking at' , toyBox[i])
}
console.log('found the red car, stopped looking')


// continue
const fruitBasket = ['banana', 'apple', 'oranges', 'grapes']
for(let i = 0; i<fruitBasket.length; i++){
  if(fruitBasket[i]==='apple'){
    continue
  }
  console.log('putting in the bowl,', fruitBasket[i])
}
console.log('all apples are sorted')

// looping through an array

let appleCount = ['apple1', 'apple2' , 'apple3', 'apple4']
let total = 0
for(let i = 0 ; i<appleCount.length; i++){
  total += 1
}
console.log('total apples', total)

// accumulator pattern

let scores = [10,20,30,40,50]
let totalScore = 0
for(let i = 0; i<scores.length; i++){
  totalScore += scores[i]
}
console.log('total score: ', totalScore)



// lesson 11 exercises
let array = ['hello', 'world', 'search', 'good']
let found = -1
for(let i = 0; i<array.length; i++){
  if(array[i] === 'search'){
    found= i
break
  }

}
console.log(found)

/*
let array1 = ['hello', 'world', 'search', 'good', 'search']
let found1 = -1
for(let i=0 ; i<array1.length; i++){
  if(array1[1] ==='search'){
    found1=i
  break
  }

}
console.log(found1)
*/ 
//11q
function findIndexofarray(array,word){
for(let i = 0; i<array.length; i++){
if(array[i] ===word){
return i
}
}
return -1
}
console.log(findIndexofarray(['green','red','blue','white','red'],'red'))
console.log(findIndexofarray(['green','red','blue','white','red'],'orange'))

//11r
function removesEgg(foods){
let result =[]
for(let i = 0; i<foods.length; i++){
if(foods[i]==='egg'){
continue
}
result.push(foods[i])
}
return result}
console.log(removesEgg(['egg','ham','apple', 'egg', 'egg']))

// updated to remove only 2 eggs
function removesEgg(foods){
let result =[]
let eggCount = 0
for(let i = 0; i<foods.length; i++){
if(foods[i]==='egg' && eggCount<2){
eggCount++
continue
}
result.push(foods[i])
}
return result}
console.log(removesEgg(['egg','ham','apple', 'egg', 'egg']))


//updated to remove last 2 eggs by reversing array first
function removesEgg(foods){
let result = []
let eggCount= 0
foods.reverse()
for(let i = 0; i<foods.length; i++){
if(foods[i]==='egg'&& eggCount<2){
  eggCount++
  continue
}
result.push(foods[i])
}
result.reverse()
return result
}
console.log(removesEgg(['egg',,'apple', 'egg', 'egg', 'ham']))


//Fixxbuxx solution
for(let num = 0; num<100; num++){
if(num%3===0 && num%5===0){
console.log('fixxbuxx')
} else if(num%3===0){
console.log('fixx')
}else if (num%5===0){
console.log('buxx')
}else{
console.log(num)
}
}

//loop exercises coursera
for(let i = 0; i<5;i++){
console.log(i)
}
console.log('counting completed')


for(let i = 5; i>0; i--){

console.log(i)
}
console.log('countdown finished')


let i = 1
while(i<6){
console.log(i++)
}
console.log('counting completed')


let x = 5
while(x > 0){
console.log(x)
x = x-1
}
console.log('counting finished')


let year = 2018
while(year<2023){
console.log(year++)
}

//nested loops
for(let i = 100; i>10; i= i-10){
for(let j = 10; j>4; j= j-5){
console.log(i + ' divided by '+ j +' equals ' + i / j )
}
}

//loops with conditionals
for(let i =0; i<11; i++){
if(i===1){
console.log('Gold medal')
} else if(i===2){
console.log('Silver medal')
} else if(i===3){
console.log('Bronxe medal')
} else{
console.log(i)
}
}

//using switch
for(let i= 0;i<11;i++){
switch(i){
case 1 :console.log('GOLD MEDAL')
        break
case 2 : console.log('silver medal')
         break
case 3 : console.log('bronxe medal')
        break
default: console.log(i)


      }
}

//practicing functions

function letterFinder(word , match){
for(let i = 0; i<word.length; i++){
if(word[i]===match){
console.log('found the ', match , 'at ', i)
} else{
console.log('No ' , match ,'found at ' , i)
}
}
}
letterFinder('test', 't')


// arrays and objects
const clothes = []
clothes.push('jeans')
clothes.push('casual')
clothes.push('jackets')
clothes.push('tshirts')
clothes.push('shirts')
console.log(clothes)
clothes.pop('shirts')
console.log(clothes)
clothes.push('hoodies')
console.log(clothes)
clothes[2] 
console.log(clothes[2])

// objects
const favCar = {
color : 'black',
convertible : true
}
console.log(favCar.convertible)


var greeting = 'hello'
var user  = 'ryan'
console.log(greeting.concat(user))


var greet = 'hi'
var person = 'giggs'
console.log(person.toUpperCase())


// objects methods

var car = {}
car.color= 'red',
car.mileage = 5555,
console.log(car)
//add method to car object
car.turnKey = function(){
console.log('engine running')
}
console.log(car)


//99 bottles challenge
for(let i = 99; i>0; i--){
if(i>1){
console.log(`${i} bottles of beer on the wall, ${i} bottles of beer,`);
console.log(`take one down and pass it around, ${i-1} bottles of beer on the wall.\n`)
} else{
console.log(`${i} bottle of beer on the wall, ${i} bottle of the beer on the wall.`);
console.log('take one down and pass it around, no more bottles of beer on the wall.\n');
}
}
console.log('No more bottles of beer on the wall, no more bottles of beer.');
console.log('Go to the store and buy some more, 99 bottles of beer on the wall')












//fibonacci sequence generator using arrays
// iterative approach
function fibonnaciIterative(n){
let fibSequence = [0,1]
for(let i = 2; i<n; i++){
fibSequence.push(fibSequence[i-1] + fibSequence[i-2])
}
return fibSequence.slice(0,n)
}
let n = 3000
console.log(fibonnaciIterative(n))

//recursive approach
function fibonacciRecursive(y){
if(y<= 0){
return []
} else if(y===1){
return [0]
} else if(y===2){
return [0,1]
} else {
let sequence = fibonacciRecursive(y-1);
sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);
return sequence;
} 
}
let y = 1500
console.log(fibonacciRecursive(y))