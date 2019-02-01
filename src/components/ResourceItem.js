import React, { Component } from 'react';
import styled from 'styled-components';

const ResourceItemStyle = styled.div`
  position: relative;
  width: 30%;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.16);
  margin-bottom: 30px;

  padding-bottom: 50px;

  header {
    img {
      display: block;
      width: 100%;
    }

    border-bottom: 1px solid #DDD;
  }

  h2 {
    min-width: 30%;
    max-width: 80%;
    height: 50px;
    margin: auto;

    position: relative;
    top: -25px;

    background-color: #fd8a7d;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Fugaz One";
  }

  p {
    padding: 30px 20px;
  }

  .tags-list {
    display: flex;
    flex-wrap: wrap;
    padding: 15px 20px;

    .tag {
      background-color: #f1f1f1;
      color: #707070;
      border-radius: 45px;
      padding: 5px 15px;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 600;
      margin-right: 15px;
      margin-bottom: 10px;
      cursor: pointer;
      border: none;
    }
  }

  footer {
    position: absolute;
    bottom: 0;

    width: 100%;
    height: 50px;

    padding: 0 20px 20px 0;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    a {
      display: inline-block;
      background-color: #fd8a7d;
      color: white;
      padding: 6px 15px;
    }
  }
`;

class ResourceItem extends Component {
  render() {
    const {excerpt, id, tags, title, href, thumbnail} = this.props.model
    
    return (
      <ResourceItemStyle data-id={id}>
        <div>
          <header>
            <img src={thumbnail} alt="#"/>
          </header>
          <h2>{title}</h2>
          <p>{excerpt}</p>
          <div className="tags-list">
            {tags.map((t, i) => (
              <button key={i} className="tag" onClick={() => this.props.onChangeFunc(t)}>
                {t}
              </button>
            ))}
          </div>
          <footer>
            <a href={href}>Check it out !</a>
          </footer>
        </div>
      </ResourceItemStyle>
    )
  }
}

export default ResourceItem;