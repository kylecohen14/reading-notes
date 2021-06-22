# Read 12 Docs for the HTML <canvas> element and chart.js
## Easily Create Stunning Animated Charts with Chart.JS
- charts are better for displaying data
- not the easiest to create
- use chart.js

- Sara Vieira, EASILY CREATE STUNNING ANIMATED CHARTS WITH CHART.JS (*webdesignerdepot.com*) https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/

## Chart.js
- Just need script and single ```canvas``` node to render the chart
  - give ```canvas``` a container of div
  - give ```script``` chart.js
  - Use the following instructions from this article to get started
- Chart.js (*chartjs.org*) https://www.chartjs.org/docs/latest/

## Basic usage of canvas
- ```canvas``` element has two attrivutes
  - width and hieght (optional)
    - default if no heihgt or width = 300px X 150px
- need a script to display something

## Drawing shapes with canvas
- <canvas> only supports two shapes, rectangles and paths 
- other shapes created using combination of one or more paths
- rectangle
  - fillRect(x, y, width, height) filled rectangle
  - strokeRect(x, y, width, height) Draws a rectangular outline.
  - clearRect(x, y, width, height) Clears the specified rectangular area, making it fully transparent.
    - Each function takes the same parameters x and y
    - width and height provide rectangles size
   
   - ``` function draw() {```
  ```var canvas = document.getElementById('canvas');```
  ```if (canvas.getContext) {```
    ```var ctx = canvas.getContext('2d');```

   ``` ctx.fillRect(25, 25, 100, 100);```
    ```ctx.clearRect(45, 45, 60, 60);```
    ```ctx.strokeRect(50, 50, 50, 50);```
  ```}```
```}```
- fillRect() draws large square 100px sides
- clearRect() erases 60x60 pixel square from the center and then strokeRect() creates rectangular outline


### Drawing a path
- first create a path
- then use drawing commands to draw into the path
- when created, then stroke or fill to render

- Use the following to do the steps
  - beginPath(  )
  - Path methods
  - closePath()
  - stroke()
  - fill()


- Draw a triangle
  - begin oath
  - moveto
  - lineto
  - lineto
  - fill

- moving the pen
  - use moveTo(x, y)
- Lines
  - LineTo(x, y)
- arcs
  - arc(x, y, radius, startAngle, endAngle, counterclockwise)
  - arcTo(x1, y1, x2, y2, radius)

## Applying styles and colors
- use properties of fillstyle = color
      - (sets style when filling shapes)
  - and strokeStyle = color
           - ( sets style for shapes outlines)
- Transparency uses globalAlpha = transparencyValue
  - This applys transparency to all future shapes on the canvas
## Drawing text
- use
  - fillText(text, x, y [, maxWidth])
  - strokeText(text, x, y [, maxWidth])

- MDN Web Docs (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)