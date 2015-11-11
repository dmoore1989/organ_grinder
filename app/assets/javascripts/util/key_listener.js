var noteName = {
  65: "C3",
  87: "C#3/Db3",
  83: "D3",
  69: "D#3/Eb3",
  68: "E3",
  70: "F3",
  84: "F#3/Gb3",
  71: "G3",
  89: "G#3/Ab3",
  72: "A3",
  85: "A#3/Bb3",
  74: "B3",
  75: "C4",
  79: "C#4/Db4",
  76: "D4",
  80: "D#4/Eb4"
};

$(document).on("keydown", function(event){
  KeyActions.keyPressed(noteName[event.keyCode]);
});

$(document).on("keyup", function(event){
  KeyActions.keyReleased(noteName[event.keyCode]);
});
