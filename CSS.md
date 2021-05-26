### CSS

# CSS (cascading style sheets) adds a diffrent look to your web page. 


- **Document** is a text file such as a HTML
- **presenting** is when a document is converted for the consumer/user. Chrome presents documents on the computer screen once you click on the document.

# CSS can be used for 
<ul>
    <li>changing color</li>
    <li>font, headings, and link size</li>
</ul>

# CSS syntax

- To get a "main heading on my page to be shown in large red txt"
You would enter..
- ``` h1 {
    color: red;
    font-size: 5em;
} ```

- Notice the {} are used, and that we have declared what we want to change.
- We entered "color" then a colon, followed by what color we want the txt to have.
### - You can look up all CSS propertys and features on the MDN CSS reference.

##### How to add CSS

# There are three ways to insert a style sheet
- External CSS
- Internal CSS
- Inline CSS

# External CSS
- Can change entire website with one file
    - Must contain a reference to the external sheet in the ``` <link> ``` element inside the head
    Example
        !doctype html
        html
        head
        ``` <link rel="stylesheet" href="mystyle.css"> ```
        /head
        body
        

