import React, { Component } from 'react';

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
          <p>0</p>
        </div>
        <div>
          <h3>STRIKE</h3>
          <p>0</p>
        </div>
      </DisplayContainer>
    );
  }
}

export default Display;
