// wait for the DOM to finish loading
$(document).ready(function() {
//

     $( ".squares" ).eq("li").each();

  var squares = $(".squares");
  //var counter = 1;
//  var playerATurn = true;

  console.log(".squares", squares);
  // check if counter has a remainder of 0 when % 2
  // if ( counter % 2 !== 0) {
  //   // if it does
  //   // player b's turn
  //   playerATurn = false;
  //   // else
  // } else {
  //   // player a's turn
  //   playerATurn = true;
  // };
  //
  // determine winner

  $(".squares").on("click", function(){
    console.log("click works");
  });
//  console.log("End of document.ready in app.js");
});
//  console.log("End of app.js");
