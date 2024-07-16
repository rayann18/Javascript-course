import formatCurrency from "../../scripts/utils/money.js";


console.log('test suite : format currency')

console.log('converts cents to dollars')
if(formatCurrency(2095) === '20.95'){ // test case with 2095
  console.log('passed')
} else {
  console.log('failed')
}

console.log('works with 0')
if(formatCurrency(0) === '0.00'){ // test case with 0
  console.log('passed')
} else{
  console.log('failed')
}

console.log('rounds up to the nearest cent ')
if(formatCurrency(2000.5) ==='20.01'){ //test case with 2000.5
  console.log('passed')
} else {
  console.log('failed')
}

console.log('rounds up to the nearest 0')
if(formatCurrency(2000.4) ==='20.00'){ //test case with 2000.4
  console.log('passed')
} else {
  console.log('failed')
}