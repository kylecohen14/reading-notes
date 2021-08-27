Understanding the javaScript call stack

1. What is a ‘call’?
  - used for functuon invocation, temp storage and managing of funciton invocation
2. How many ‘calls’ can happen at once?
  - depends on the max call size
3. What does LIFO mean?
  - last in first out
4. Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.
  - funciton call myself(){
 -   callMyself();
 - }
 - callmyself(); 
5. What causes a Stack Overflow?
  - when there is a recursive function (calls itself) with out an exit point


Javascript error messages

1. What is a ‘refrence error’?
  - when something is trying to be used but its being hoisted at the moment
2. What is a ‘syntax error’?
  - when something cant be parsed in terms of syntax
3. What is a ‘range error’?
  - Try to manipulate an object with some kind of length and give it an invalid length
4. What is a ‘tyep error’?
  - when the types trying to be used are incompatible
5. What is a breakpoint?
  - pausing of JS execution, like when there is a debugger statment used
6. What does the word ‘debugger’ do in your code?
  - stops on a certian line when something should stop trying to execute due to error

## cite 
- The JS call stack - what it is and why (https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)
- JavaScript error messages && debugging (https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)