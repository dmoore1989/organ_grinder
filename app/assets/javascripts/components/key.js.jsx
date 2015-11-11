var Key = React.createClass({
  getInitialState: function () {
    return { note: new Note(window.TONES[this.props.noteName]), active: false };
  },

  componentDidMount: function () {
    KeyStore.addChangeHandler(this.keyChange);
  },

  componentWillUnmount: function () {
    KeyStore.removeChangeHandler(this.keyChange);
  },

  keyChange: function (event) {
    if (KeyStore.all().indexOf(this.props.noteName) !== -1) {
      this.state.note.start();
      this.setState({active: true});
    } else {
      this.state.note.stop();
      this.setState({active: false});
    }
  },

  render: function () {
    var disp;
    if (this.state.active){
      disp = <div><strong>{this.props.noteName}</strong></div>;
    } else {
      disp = <div>{this.props.noteName}</div>;
    }

    return disp;

  }

});
