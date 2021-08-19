# Putting it all together
## thinking in react
1. How would you break a mock into a component heirarchy?
  - draw boxes around every component
  - use single responsibility principle to see what should be single components
  - arrange in hieracrchy
2. What is the single responsibility principle and how does it apply to components?
  - a component should only do one thing. If it does more make sub components
3. What does it mean to build a ‘static’ version of your application?
  - renders the  data model and UI but has no interactivity
4. Once you have a static application, what do you need to add?
  - add state
5. What are the three questions you can ask to determine if something is state?
  - is props passing data
  - is it static
  - can you render data from anything else
6. How can you identify where state needs to live?
  - what renders based on state
  - find common owner
  - if no owner make a component

### cite
- Thinkin in react (https://reactjs.org/docs/thinking-in-react.html)