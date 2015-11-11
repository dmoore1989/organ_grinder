(function (root) {
  var _tracks = [];

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
    this.on(KeyConstants.CHANGE_EVENT, callback);
  };

  TrackStore.removeChangeHandler = function (callback) {
    this.removeListener(KeyConstants.CHANGE_EVENT, callback);
  };

  TrackStore.changed = function () {
    this.emit(KeyConstants.CHANGE_EVENT);
  };

})(this);
