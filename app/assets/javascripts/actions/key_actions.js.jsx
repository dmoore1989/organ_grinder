window.KeyActions = {



  keyPressed: function (noteName) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_PRESSED,
      noteName: noteName
    });
  },

  keyReleased: function (noteName) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_RELEASED,
      noteName: noteName
    });
  },

  keysAssign: function (noteArray) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEYS_ASSIGNED,
      noteArray: noteArray
    });
  }

};
