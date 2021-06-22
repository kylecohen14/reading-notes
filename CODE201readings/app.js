// 10 rounds of voting
// listen for an event
  //  what element are we listening to
  //        - create listeners on section containing images clicked on


  // const goatSelectoreElem = document.getElementById('all_goats');
  // all_goats is name of section id holding images
  // function handleClick(event) {
  //   // prevent default only needs to happen on forms
  //   alert(event.targt.id);
  //   // they have to click on: right_goatimg or left_goatimg for us to count their vote
  //   // otherwise we wont do anything
  
  goatSelectoreElem.addEventListener('click', handleClick);



  //  what are we going to do when we hear it
//  tally the votes
// update the LI with tallys
// no table today just record in the LI
// need an array of the goats
//    goat objects from goat constructor
//    how many votes that goat got
//    each goat needs
//      -img/ name/ (timesShown, need this later on)
//  
//  


// ------------global variables ---------------
const goatSelectoreElem = document.getElementById('all_goats');
const leftImgElem = document.getElementById('left_goat_img');
const rightImgElem = document.getElementById('right_goat_img');

let voteCounter = 0
Goat.allGoats = [];

// -----------contructore funciton-----------------
function Goat(name, image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.votes = 0;

  Goat.allGoats.push(this);
}

// -----------prototype methods ---------------

// if we render a single goat instance, we need to know is it the left goat or right goat
Goat.prototype.renderSingleGoat = function(postion) {

}


// -------------global functions -------------

function handleClick(event) {
  // prevent default only needs to happen on forms
  alert(event.targt.id);
  // they have to click on: right_goatimg or left_goatimg for us to count their vote
  // otherwise we wont do anything