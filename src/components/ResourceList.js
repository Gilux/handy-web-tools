import React, { Component } from 'react';
import styled from "styled-components";

import ResourceItem from "../components/ResourceItem";

const ResourceListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

class ResourceList extends Component {
  render() {
    return <ResourceListStyle>
      {this.props.resources.map((obj, i) => <ResourceItem model={obj} key={i} />)}
      </ResourceListStyle>;
  }
}

export default ResourceList;