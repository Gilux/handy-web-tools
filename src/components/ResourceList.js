import React, { Component } from 'react';
import styled from "styled-components";

import ResourceItem from "../components/ResourceItem";

const ResourceListStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

class ResourceList extends Component {
  render() {
    return <ResourceListStyle>
      {this.props.resources.map((obj, i) => <ResourceItem model={obj} key={i} searchFunc={this.props.searchFunc}/>)}
      </ResourceListStyle>;
  }
}

export default ResourceList;