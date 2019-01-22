import React, { Component } from 'react';
import { Link } from "gatsby";
import styled from 'styled-components'

import logo from '../assets/logo.png'

const HeaderStyle = styled.header`
  background-color: #ffc2b1;
  height: 100px;
  margin-bottom: 100px;

  .container {
    position: relative;
    height: 100%;
  }

  .main-nav {
    color: white;
  }
`;

class PageHeader extends Component {
  render() {
    return <HeaderStyle>
        <div className="container">
          <Link to="/" className="logo" onClick={() => this.props.resetQuery()}>
            <img src={logo} alt="Logo" />
          </Link>
          <nav className="main-nav">
            <Link to="/about/">About</Link>
            <Link to="/contribute/">Contribute</Link>
          </nav>
        </div>
      </HeaderStyle>;
  }
}

export default PageHeader;