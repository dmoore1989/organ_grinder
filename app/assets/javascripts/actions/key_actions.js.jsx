window.KeyActions = {

  noteName: {
    65: "C3",
    87: "C#3/Db3",
    83: "D3"

  },

  keyPressed: function (keyCode) {
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_PRESSED,
      noteName: KeyActions.noteName[keyCode]
    });
  },

  keyReleased: function (keyCode){
    AppDispatcher.dispatch({
      actionType: KeyConstants.KEY_RELEASED,
      noteName: KeyActions.noteName[keyCode]
    });
  },

};
