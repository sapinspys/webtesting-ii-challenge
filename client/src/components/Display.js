import React, { Component } from 'react';

import { connect } from 'react-redux';

import styled from 'styled-components';

const DisplayContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

class Display extends Component {
  render() {
    return (
      <DisplayContainer>
        <div>
          <h3>BALL</h3>
          <p>{this.props.ball}</p>
        </div>
        <div>
          <h3>STRIKE</h3>
          <p>{this.props.strike}</p>
        </div>
      </DisplayContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ball: state.ball,
    strike: state.strike
  }
}

export default connect(mapStateToProps, {})(Display);
