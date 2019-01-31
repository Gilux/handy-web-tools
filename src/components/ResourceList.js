import React, { Component } from 'react';
import styled from "styled-components";

import ResourceItem from "../components/ResourceItem";

const ResourceListStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  margin-top:50px;
`;

class ResourceList extends Component {
  render() {
    return <ResourceListStyle>
      {this.props.results.map((obj, i) => <ResourceItem model={obj} key={i} onChangeFunc={this.props.onChangeFunc}/>)}
    </ResourceListStyle>;
  }
}

export default ResourceList;