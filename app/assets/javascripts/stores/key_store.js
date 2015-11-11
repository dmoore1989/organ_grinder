(function (root) {
  var  _keys = [];
  
  root.KeyStore = $.extend({}, EventEmitter.prototype);
  root.KeyStore.setMaxListeners(25);

  KeyStore.addChangeHandler = function (callback) {
    this.on(KeyConstants.CHANGE_EVENT, callback);
  };

  KeyStore.removeChangeHandler = function (callback) {
    this.removeListener(KeyConstants.CHANGE_EVENT, callback);
  };

  KeyStore.changed = function () {
    this.emit(KeyConstants.CHANGE_EVENT);
  };

  KeyStore.all = function () {
    return _keys.slice();
  };

  KeyStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.actionType) {
      case KeyConstants.KEY_PRESSED:
        if (_keys.indexOf(payload.noteName) === -1){
          _keys.push(payload.noteName);
          KeyStore.changed();
        }
        break;
      case KeyConstants.KEY_RELEASED:
        var idx = _keys.indexOf(payload.noteName);
        _keys.splice(idx, 1);
        KeyStore.changed();
        break;

      case KeyConstants.KEYS_ASSIGNED:
        _keys = payload.noteArray;
        KeyStore.changed();
        break;

    }
  });

})(this);
