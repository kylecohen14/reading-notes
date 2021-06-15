# Reading 07 HTML tables; JS constructor Functions

## Article "Domain Modeling"
### Contribu "https://github.com/codefellows/domain_modeling#domain-modeling" Contributers= Ryan Sobol, Sam Hamm, Keli Hansen
- Domain modeling
  - The process of creating conceptual model in code for specific problem
  - *Object-oriented model*
    - Entity stores data in properties, encapsuls behaviors in methods
- Well articulated doamins can help both tech and business teams understand problems
- **New** keyword instantiates (creates) an object
- Store created objects in a variable so you can access it from outside
  - Use **this** with methods so you can access objects properties and methods from inside

## HTML ch.6 "tables" pp.126-145"
- Tables represent info in grib format
- basic structure
``` 
  table
    tr
      td
      td
      td
    /tr
    tr
      td
      td
      td
    /tr
    tr
      td
      td
      td
    /tr
  /table
  ```
    - table, table row, table data
- **TH** used for headings of colums and rows
  - **Scope COL and ROW** used to determine which *th* is being used
    - **COLSPAN** to indicated how many colums to run across for heading
    - **ROWSPAN** to indicate how many rows to run across (down)
- **LONG TABLES**
  - use THREAD, TBODY, TFOOT
  - Thread is the heading
  - Tbody is body
  - Tfoot is footer

## JS ch.3 "functioms, methods, and objects" pp.106-144"
- constructor notations
  - Create new object using **new** and **object**
- updating a object
  - object.propertyname = property value
- can use templates for creating objects
  - new keyword followerd by a call to the function creates a new object
- arrays are objects
- arrays can go in objects and vice virsa

- Three groups of built in objects
  - Browser object model
  - document object model
  - Global jS objects



- Duckett, J.(2014). JAVASCRIPT & JQUERY , HTML&CSS