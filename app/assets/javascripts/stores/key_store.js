(function(root){
  var  _keys = [];
  var CHANGE_EVENT = "change";
  root.KeyStore = $.extend({}, EventEmitter.prototype);

  KeyStore.addChangeHandler = function (callback){
    this.on(CHANGE_EVENT, callback);
  };

  KeyStore.removeChangeHandler = function (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  };

  KeyStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  KeyStore.all = function () {
    return _keys.slice();
  };

  KeyStore.dispatcherId = AppDispatcher.register(function (payload) {
    switch (payload.eventType) {
      case KeyConstants.KEY_PRESSED:
        _keys.push(payload.noteName);
        KeyStore.changed();
    }
  });

})(this);
