var Organ = React.createClass({

  render: function(){
    var keys = Object.keys(window.TONES);

    return (
      <div>
        {keys.map(function (key) {
          return <div><Key noteName={key}/>
          </div>;
          })
        }
      </div>
    );

  }


});
