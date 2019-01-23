import React, { Component } from "react"
import { graphql } from "gatsby";
import {Index} from 'elasticlunr';
import { Helmet } from "react-helmet";

import PageHeader from "../components/PageHeader"
import ResourceList from "../components/ResourceList";
import CategoriesList from "../components/CategoriesList";

export const query = graphql`query
SearchIndexExampleQuery {
    siteSearchIndex {
      index
    }
}`

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
      categories: []
    };

  }
  
  componentDidMount() {
    this.getMostFrequentTags()
  }

  getMostFrequentTags() {
    this.index = this.getOrCreateIndex();
    let categories = {};
    console.log(this.index.toJSON())
    const docs = this.index.toJSON().documentStore.docs
    Object.keys(docs).forEach((k) => {
      docs[k].tags.forEach(t => {
        if(!categories[t]) { 
          categories[t] = 0
        }
        categories[t]++
      })
    })

    console.log(categories)
    var sortable = [];
    for (var c in categories) {
      sortable.push([c, categories[c]]);
    }
    sortable.sort(function (a, b) {
      return b[1] - a[1];
    });

    let output = []
    sortable.forEach(s => {
      output.push(s[0])
    })

    console.log(output)


    this.setState({ categories: output });
  }

  render() {
    const content = (this.state.query === "") ? <CategoriesList categories={this.state.categories} searchFunc={ this.search } /> : <ResourceList resources={this.state.results} />
    return <>
        <Helmet>
          <title>Handy Web Resources</title>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        </Helmet>

        <PageHeader resetQuery={this.resetQuery} />

        <main>
          <div className="container">
            <h1 className="text-center">
              A selection of the finest <span>open web resources</span>
            </h1>

            <div id="search-bar">
              <form>
                <input type="text" value={this.state.query} onChange={this.onSearch} placeholder="Search..." />
              </form>
            </div>

            {content}
          </div>
        </main>
      </>;
  }

  resetQuery = () => {
    this.setState({query: ``})
  }

  getOrCreateIndex = () => this.index
        ? this.index
        // Create an elastic lunr index and hydrate with graphql query results
        : Index.load(this.props.data.siteSearchIndex.index);

  onSearch = (evt) => {
    this.search(evt.target.value)
  }

  search = (query) => {
    this.index = this.getOrCreateIndex();
    console.log(this.index.toJSON().documentStore.docs)
    this.setState({
        query,
        // Query the index with search string to get an [] of IDs
        results: this.index.search(query, {expand: true})
            // Map over each ID and return the full document
            .map(({
            ref,
            }) => {
              return this.index.documentStore.getDoc(ref)
            }),
    });
  }

}

export default Main