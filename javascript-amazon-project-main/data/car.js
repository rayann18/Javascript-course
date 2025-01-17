 // data/car.js
 class Car  {
constructor(brand , model){

  this.brand = brand;
  this.model =model;
  this.speed = 0;
  this.isTrunkOpen = false

}
displayInfo(){   // car.method of display info
  console.log(`${this.brand}  ${this.model}, speed : ${this.speed} km/h , Trunk open : ${this.isTrunkOpen}` );
}

go(){
  if(this.speed < 200){
    this.speed += 5
  }
}
 
break(){
  if(this.speed > 0){
    this.speed -= 5;
  }
}

openTrunk(){
  if(this.speed === 0){
this.isTrunkOpen = true;
  }
}
closeTrunk(){
  this.isTrunkOpen = false
}
go(){
  if(this.isTrunkOpen && this.speed < 200){
this.speed += 5
  }
}
brake(){
  if(this.speed > 0){
    this.speed -= 5;
  }
}
 }

class RaceCar extends Car {
  constructor (brand , model , acceleration){
    super(brand,model);
    this.acceleration = acceleration
  }
  go(){
    if(this.speed < 300){
     this.speed += this.acceleration
    }
  }
  openTrunk(){
    console.log('Race cars do not have a trunk');
  }
  closeTrunk(){
    console.log('Race cars do not have a trunk');
  }
}
const raceCar   = new RaceCar ('Mclaren' , 'F1' , 20);
raceCar.go();
raceCar.displayInfo()



car1.openTrunk();
car1.go(); // should not increase speed because trunk is closed
car1.closeTrunk();
car1.go(); // should now increase speed
car1.displayInfo();




car1.go()
car1.break()
car1.displayInfo()

car2.go()
car2.break()
car2.displayInfo()


 car1.displayInfo()  // running display info for each car
 car2.displayInfo()

 const car1 = new Car('toyota', 'corrola')   // use car class to generate few new car objects
 const car2 = new Car('tesla', 'model 3')

 console.log(car1)
 console.log(car2)

 // CallBacks
 function fetchData(callback){
  setTimeout ( () => {
    const data = { name : 'john' , age : 30,};
    callback(data)
  }, 2000); // simulating async operation eg fetching data from server
 }
 function displayData(data){
  console.log(`Name : ${data.name}, age : ${data.age}`)
 }
 fetchData(displayData)



 // Promises
 const fetchData = new Promise((resolve, reject) => {
  setTimeout( () => {
    const data  = {name : 'ryan', age : '22'};
    const success = true ; // simulating success or failure
    if(success){
      resolve(data);
    } else{
      reject('error fetching data')
    }
  }, 2000)
 });

 fetchData.then(data => {  // then method handles succesful promise resolution
  console.log(`Name : ${data.name}, Age : ${data.age}`)
 }).catch(error => {  // catch method handles any errors
  console.error(error)
 });

 // using promises for asynchronous operations

 function fetchData(){
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      const data  = {name  : 'giggs', age : 21+1};
      resolve(data)
    }, 2000)
  });
 }
function processData (data){
return new Promise((resolve, reject) => {
  setTimeout( () => {
    data.processed = true;
    resolve(data)
  }, 2000);
})
}
// fetch data and processdata both return promises, .then methods handle results of thes asynchronous operations sequentially
fetchData().then(data => {
  console.log('fetched data :' , data);
  return processData(data)
}).then(processedData => {
  console.log('processed data : ', processedData)
}).catch (error =>{
  console.error(error)
});

// converting callbacks to promises, (promisifying)
const fs = require('fs')
// callback version
fs.readFile('example.txt' , 'utf8', (err, data) =>{
  if(err){
    console.log('error reading file', err);
  } else{
    console.log('file content :', data)
  }
});
// promise version
const readFilePromise = (filePath, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (err, data) =>{
if(err){
  reject(err)
} else{
  resolve(data)
}
    })
  })
};
// readfile promise function converts (fs.readfile function) which uses a callback into a function that returns a promise
readFilePromise('example.txt', 'utf8').then(data => {
  console.log('file content : ', data);
}).catch(err => {
  console.error('error reading file : ',  err)
});