import React, { Component } from "react"
import { graphql } from "gatsby";

import PageHeader from "../components/PageHeader"
import SearchBar from "../components/SearchBar";
import ResourceList from "../components/ResourceList";

class Main extends Component {

  constructor(props) {
    super(props);
    this.data = props.data
  }

  onSearchChange(text) {
    console.log(text)
  }

  render() {
    return (
      <>
        <PageHeader />

        <main>
          <div className="container">
            <h1 className="text-center">
              A selection of the finest <span>open web resources</span>
            </h1>

            <SearchBar onSearchChange={this.onSearchChange.bind(this)} />


            {/* <CategoriesList /> */}

            <ResourceList resources={this.data.allMarkdownRemark.edges} />

          </div>
        </main>
      </>)
  }
}

export default Main

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          excerpt
        }
      }
    }
  }
`;