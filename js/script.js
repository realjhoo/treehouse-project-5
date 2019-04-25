// Hey, input box... what's up?
document
   .getElementById("searchInput")
   .addEventListener("keyup", liveSearchFunction);

function liveSearchFunction() {
   const anchor = document.querySelectorAll(".photo-gallery a");
   let tempSearchString = document.getElementById("searchInput");
   let searchString = tempSearchString.value.toLowerCase();

   for (var i = 0; i < anchor.length; i++) {
      // loop thru data-titles
      let caption = anchor[i].getAttribute("data-title");
      // LCASE the data-title
      let lcaseCaption = caption.toLowerCase();
      // Compare the strings
      let isIn = lcaseCaption.includes(searchString);

      if (isIn) {
         // set the display
         anchor[i].style.display = "grid";
      } else {
         // hide it
         anchor[i].style.display = "none";
      }
   }
}
