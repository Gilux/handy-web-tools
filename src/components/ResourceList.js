import React, { Component } from 'react';
import styled from "styled-components";

import ResourceItem from "../components/ResourceItem";

const ResourceListStyle = styled.div`
  column-count: 3;
  column-gap: 30px;
`;

class ResourceList extends Component {
  render() {
    return <ResourceListStyle>
      {this.props.resources.map((obj, i) => <ResourceItem model={obj} key={i} />)}
      </ResourceListStyle>;
  }
}

export default ResourceList;