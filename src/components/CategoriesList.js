import React, { Component } from 'react';
import Category from './Category';

import styled from "styled-components";

const CategoriesListStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;


class CategoriesList extends Component {
  render() {
    return <CategoriesListStyle>
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </CategoriesListStyle>
  }
}

export default CategoriesList;