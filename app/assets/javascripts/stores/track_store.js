(function (root) {
  var _tracks = [];
  var CHANGE_EVENT = "change";
  root.TrackStore = $.extend({}, EventEmitter.prototype);
  root.TrackStore.setMaxListeners(25);

  TrackStore.all = function () {
    return _tracks.slice();
  };

  TrackStore.addTrack = function (track) {
    _tracks.push(track);
    TrackStore.changed();
  };

  TrackStore.deleteTrack = function (track) {
    var trackIdx = _tracks.indexOf(track);
    _tracks.splice(trackIdx, 1);
    TrackStore.changed();
  };

  TrackStore.addChangeHandler = function (callback) {
    this.on(CHANGE_EVENT, callback);
  };

  TrackStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  TrackStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

})(this);
