export const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {  // wait for the response
 console.log(xhr.response)  //save the response in our code
})

xhr.open('GET', 'https://supersimplebackend.dev') // send request
xhr.send();
xhr.response()