import React, { Component, PropTypes } from 'react'

class AppView extends Component {
  render() {
    return (
      <div id="app-view">
        <h1>Counter</h1>
        <hr />

        {this.props.children}
      </div>
    );
  }
}

export default AppView;