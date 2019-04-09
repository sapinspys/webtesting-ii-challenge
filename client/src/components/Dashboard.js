import React, { Component } from 'react';

import { strike, foul, ball, hit } from '../actions';
import { connect } from 'react-redux';

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
        <button onClick={this.props.strike}>STRIKE</button>
        <button onClick={this.props.ball}>BALL</button>
        <button onClick={this.props.foul}>FOUL</button>
        <button onClick={this.props.hit}>HIT</button>
        <p>{this.props.actionReq ? "Loading..." : ""}</p>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    actionReq: state.actionReq
  }
}

export default connect(mapStateToProps, { strike, foul, ball, hit })(Dashboard);

