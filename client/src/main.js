import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as exampleActions from 'actions/example';

class MainTemplate extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.example({
      data: Math.floor(Math.random() * 10)
    });
  }

  render() {
    const { exampleReducer } = this.props;
    return (
      <div id="main" onClick={this.clickHandler}>
        {this.props.exampleReducer.data || 'Main'} 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...exampleActions}, dispatch);
}

const Main = connect(mapStateToProps, mapDispatchToProps)(MainTemplate);

export default Main;

