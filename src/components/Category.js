import React, { Component } from 'react';
import styled from 'styled-components'

const CategoryStyle = styled.a`
  width: 24%;
  height: 150px;
  background-color: #aa6c9a;
  color: white;
  margin-bottom: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Fugaz One";
  font-size: 25px;
`;

class Category extends Component {
  render() {
    return <CategoryStyle href="#" class="category-item">
        Category
      </CategoryStyle>;
  }
}

export default Category;