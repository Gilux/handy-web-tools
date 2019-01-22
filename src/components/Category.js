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
    return <CategoryStyle href="#" className="category-item" onClick={() => this.props.searchFunc(this.props.cat)}>
        {this.props.cat}
      </CategoryStyle>;
  }
}

export default Category;