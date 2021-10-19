1. Describe (in plain English) what Array.map() does
  - Array.map will go over each element in the array and will return a new array in the same style as the orignal
2. Describe (in plain English) what Array.reduce() does
  - Array.reduce will go over each element in the given array and will execute a callback on each element. The return will be determined by what accumulator was set (the callback), thus returning a array of different size from the orignal 
3. Provide code snippets showing how to use superagent() to fetch data from a URL and log the result
With normal Promise .then() syntax
 
```
const superagent = require superagent;

function name() {

superagent.get(api.url)

.then(data => {console.log({[data.body.]})

.catch(error => console.error)
```
 

Again with async / await syntax
 
```
async function name() {

let nameOfAPi = await superagent.get(api.url)

console,log(data.body)

invokefunction name()
```
 

4. Explain promises as though you were mentoring a Code 301 level student
  - Promise is an object
    - it represents the result of an async function once it has been completed. Thus other code may continue running while the async function works
        - three stages of promise are as follows:
        - pending
        - fulfilled
        - rejected
5. Are all callback functions considered to be Asynchronous? Why or Why Not?
  - No they are not
  - callbacks are passed as arguments
  - Think of them as a function passed as a parameter into another function