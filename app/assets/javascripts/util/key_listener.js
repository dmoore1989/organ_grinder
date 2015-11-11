$(document).on("keydown", function(event){
  KeyActions.keyPressed(event.keyCode);
});

$(document).on("keyup", function(event){
  KeyActions.keyReleased(event.keyCode);
});
