import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { InstantSearch, connectStateResults, connectSearchBox } from 'react-instantsearch-dom'

import PageHeader from "../components/PageHeader"
import ResourceList from "../components/ResourceList"

const Content = connectStateResults(({ searchState, searchResults, onChangeFunc }) => {
  const hasResults = searchResults && searchResults.nbHits !== 0;
  if(hasResults) {
    return (
      <ResourceList results={searchResults.hits} onChangeFunc={onChangeFunc} />
    )
  }
  return <div>No results has been found for {searchState.query}</div>
});

const Search = connectSearchBox(({ onFocus, onBlur, currentRefinement, refine, onChangeFunc }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      value={currentRefinement}
      onChange={e => {
        onChangeFunc(e.target.value)
      }}
    />
  )
})

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {},
      results: [],
      categories: []
    };
  }

  render() {
    return <>
        {/* Add elements to <head> with Helmet */}
        <Helmet>
          <title>Handy Web Resources</title>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.0.0/themes/algolia-min.css" />
        </Helmet>

        <InstantSearch
          appId={process.env.GATSBY_ALGOLIA_APP_ID}
          apiKey={process.env.GATSBY_ALGOLIA_SEARCH_ID}
          indexName="webresources"
          searchState={this.state.search}
        >
          <PageHeader resetQuery={this.resetQuery} />
          <main>
            <div className="container">
              <h1 className="text-center">
                A selection of the finest <span>open web resources</span>
              </h1>
              <Search onChangeFunc={(val) => this.resetQuery(val)}/>
              <Content onChangeFunc={(val) => this.resetQuery(val)} />
            </div>
          </main>
        </InstantSearch>
      </>;
  }

  resetQuery = (val = "") => {
    console.log(val)
    this.setState({search: {query: val}})
  }
  
}

export default Main