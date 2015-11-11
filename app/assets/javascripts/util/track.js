(function () {
  var Track = window.Track = function(name, roll){
    this.name = name;
    this.roll = roll || [];
  };

  Track.prototype.startRecording = function() {
    this.roll = [];
    this.currentTime = new Date();
  };

  Track.prototype.addNotes = function(notes){
    var notesObj = {
      time: new Date(),
      notes: notes
    };
    this.roll.push(notesObj);
  };

  Track.prototype.stopRecording = function(){
    this.addNotes([]);
  };

})();
