import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction } from './actions/simpleAction';

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({simpleAction}, dispatch),
})

class App extends Component {

  simpleAction = (e) => {
    this.props.actions.simpleAction('test');
  }

  render() {
    return (
      <div>
        hello
        <button onClick={this.simpleAction}>Test redux</button>
        <span>{this.props.state.basicReducer.result}</span>
        <pre>
        {
          JSON.stringify(this.props)
        }
      </pre>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
