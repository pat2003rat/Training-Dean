var $ = require('jquery');
var React = require('react');
var Backbone = require('backbone');

class Splash extends React.Component {
  render (){
    return (
      <div className = "container">
        <div className = "row">
          <a href="#login/"> <button className="btn btn-primary"> Login </button> </a>
          <div> Splash Screen </div>
      </div>
    </div>
    )
  }
};

module.exports = {
Splash
};
