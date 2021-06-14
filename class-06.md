# Reading 06 PROBLEM DOMAIN, OBJECTS, and the DOM

## Understanding the problem..... article
## - By John Sonmez. (2013) Simple Programmer
- Believed by some to be the hardest thing to learn, the problem domain is like puting together a puzzle with no pictue
- getting good at problem domains should make you a better coder

## Ch 3 Object literals pp100-105
- in objects
  - variables become propertys
  - function become smethod
- most common way to create object
  - **literal notation**
  - You access prperties or methos in a object using dot notation or using square brackets
``` 
var hotel = {
  name:'hotelname',
  rooms: 40,
  booked: 25,
  checlAvailability: function() {
    return this.rooms - this.booked;
  }
}; 
```
- Can use diffrent ways to create objects
  - Literal notation
  - object constructor notation

## ch 5 DOCUMENT OBJECT MODEL pp. 183-242
- DOM specifies how browsers should create a model of an html page and show JS how to access and update while in browser window
- DOM tree stores in browsers memory
  - consist of four main types of *nodes* 
    - *document node*
    - *element nodes*
    - *attribute nodes*
    - *textn nodes*
- steps
  - Step 1 ACCESS elements
  - step 2 WORK with those elements
- DOM may return one element or a Nodelist
- 
- Duckett, J.(2014). JAVASCRIPT & JQUERY