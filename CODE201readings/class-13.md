# Reading 13 Local storage
## "The past, present, & future of local storage for web applications" (http://diveinto.html5doctor.com/storage.html)
### Everything quoted below comes from this article
- Downsides to past local storage
  - "Cookies are included with every HTTP request, thereby slowing down your web application by needlessly transmitting the same data over and over
  - Cookies are included with every HTTP request, thereby sending data unencrypted over the internet (unless your entire web application is served over SSL)
  - Cookies are limited to about 4 KB of data — enough to slow down your application (see above), but not enough to be terribly useful" - Article

- What we wanted
  -  "Alot of storage space on the client that goes beyond refreshing the page and isnt transmitted to server"

## THe past
- Past attempts to make local storage better ended up either being compatiable with only one browser, relient on third party plugin.

## HTML5 storage emerged
- Good with all currrent browsers
- "From your JavaScript code, you’ll access HTML5 Storage through the localStorage object on the global window object."

``` 
if (Modernizr.localstorage) {
  // window.localStorage is available!
} else {
  // no native support for HTML5 storage :(
  // maybe try dojox.storage or a third-party solution
} 
```

Use the above function to see if browser suppports HTML5 storage

- **Can store data with a named key and retrieve that data with same key**
- **storing anything other than strings** will need **parseInt()** or **parseFloat()**


```
function saveGameState() {
    if (!supportsLocalStorage()) { return false; }
    localStorage["halma.game.in.progress"] = gGameInProgress;
    for (var i = 0; i < kNumPieces; i++) {
	localStorage["halma.piece." + i + ".row"] = gPieces[i].row;
	localStorage["halma.piece." + i + ".column"] = gPieces[i].column;
    }
    localStorage["halma.selectedpiece"] = gSelectedPieceIndex;
    localStorage["halma.selectedpiecehasmoved"] = gSelectedPieceHasMoved;
    localStorage["halma.movecount"] = gMoveCount;
    return true;
}
```
- Above is how it looks to call the function everytime a change occurs in a game