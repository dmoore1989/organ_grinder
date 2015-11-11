(function () {
  var Track = window.Track = function(name, roll){
    this.name = name;
    this.roll = roll || [];
  };

  Track.prototype.startRecording = function() {
    this.roll = [];
    this.startTime = Date.now();
  };

  Track.prototype.addNotes = function(notes){
    var notesObj = {
      timeSlice: Date.now() - this.startTime,
      notes: notes
    };
    this.roll.push(notesObj);
  };

  Track.prototype.stopRecording = function(){
    this.addNotes([]);
  };

  Track.prototype.play = function () {
    if (this.interval){
      return;
    }
    var playbackStartTime = Date.now();
    var currentNote = 0;
    this.interval = setInterval(function() {
      if (currentNote < this.roll.length) {
          if (Date.now() - playbackStartTime > this.roll[currentNote].timeSlice) {
            KeyActions.keysAssign(this.roll[currentNote].notes);
            currentNote++;
          }
      } else {
        clearInterval(this.interval);
        this.interval = undefined;
      }
    }.bind(this), 50);
  };

})();
