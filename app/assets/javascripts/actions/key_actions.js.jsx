window.KeyActions = {

  noteName: {

  },

  keyPressed: function (keyCode) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_PRESSED,
      noteName: KeyActions.noteName[keyCode]
    });
  }
};
