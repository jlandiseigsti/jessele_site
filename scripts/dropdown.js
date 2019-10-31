//constant variables DOM
  //links
  const navlinks = 
  document.getElementsByClassName("navlink");

    //area to display stuff since console is weird
  const testingGround = document.querySelector("#testingGround");

    //all areas I want to be clickable to reveal hidden stuff
  const clickable = document.querySelectorAll(".page h3");

  //hidden details "deets"
  const deets = document.querySelectorAll(".page ul");
  
  //hide deets with js... that way not js browsers won't lose them
  for (i=0; i < deets.length; i++) {
    deets[i].classList.add("hideDeets");
   }
  
  //give each h2 a click event
  for (i=0; i < clickable.length; i++) {
    clickable[i].addEventListener("click", showDeets);
   }
  
  //function to make details visible
  function showDeets() {
   this.nextElementSibling.classList.toggle("showDeets");
    this.nextElementSibling.classList.toggle("hideDeets");
  }