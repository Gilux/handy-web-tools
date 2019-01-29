import React, { Component } from 'react';
import styled from "styled-components";

import Category from './Category';

const CategoriesListStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

class CategoriesList extends Component {
  
  render() {
    return <CategoriesListStyle>
      {this.props.categories.map((c, i) => (
        <Category key={i} cat={c} searchFunc={ this.props.searchFunc }/>
      ))}
    </CategoriesListStyle>
  }
}

export default CategoriesList;