import React, { Component } from 'react';

import styled from 'styled-components';

const DashboardContainer = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>  
        {/* <button onClick={}>STRIKE</button>
        <button onClick={}>BALL</button>
        <button onClick={}>FOUL</button>
        <button onClick={}>HIT</button> */}
      </DashboardContainer>
    );
  }
}

export default Dashboard;
