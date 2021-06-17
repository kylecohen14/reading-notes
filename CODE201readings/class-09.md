# Reading 09 Forms and JS events 
## HTML
## ch 7 forms pp144-175
- ```<form>```
  - Carry's the action attribute
  - ussually has method and id as well
- *action* attribute is URL
- Diffrent types of forms are
  - text *input*
  - password *type= password*
  - text area
  - radio button *type=radio*
  - checkbox *type=checkbox
  - drop down *select*
  - multiple select box *select + size*
  - file input *input + type=file*
  - submit button *input=submit*
  - image *type=image*
  - button and hidden contorls *button*
  - labelling form controls *lable*
- HTML5 has new form elements that are easier

## ch 14 List tables and forms pp330-357
- CSS properties 
  - list style property for bullet point styles
  - can use images for points
    - list-style-image: url("");
  - position the marker outside or inside
  - style forms using
    - input
    - submit
    - fieldset
    - legend
- table cells have diffrent styles in diffrent browsers, but you can use properties to keep it consistent
- vertically align form controls in css

## JS
## ch 6 Events pp243-292
- do not use
  - html event handler attributes
- coulduse
  - traditional DOM event handlers
- event listeners are the most recent approach to handling events
event bubbling
  - event starts at inside node and flows outward
    - so ```<a>``` out ot the body and then the html and then the document
- event capturing
    - event starts outward and moves in to the ```<a>```

- **events** are browsers way of knowing when something happened, when a page loads or a button was clicked
- **binding** is which event you are waiting for and which element for that event to happen upon
- When an event occurs on an element it can trigger a javascript function
- most common events are w3c DOM events


- Duckett, J.(2014). HTML&CSS