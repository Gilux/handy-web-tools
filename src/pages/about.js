import React from "react"
import PageHeader from "../components/PageHeader"
import styled from "styled-components";

const AboutPage = styled.main`
  p,
  h2 {
    margin-bottom: 15px;
  }

  a {
    color: #f13b7d;
    font-weight: 600;
  }
`;

export default () => (
  <>
    <PageHeader />

    <AboutPage>
      <div className="container">
        <h1 className="text-center">About</h1>

        <p>
          This is a little app made with
          <a href="https://www.gatsbyjs.org/">GatsbyJS</a>,
          <a href="https://www.algolia.com/"> Algolia</a>,
          <a href="https://www.netlifycms.org/"> NetlifyCMS</a>,
          and deployed on <a href="https://netlify.com"> Netlify</a> !
        </p>

        <p>
          More infos (in French) <a href="https://gilles-granger.fr/retour-experience-gatsbyjs/">here</a>.
        </p>

        <p>
          Made by <a href="https://gilles-granger.fr">Gilles Granger</a>
        </p>
        
        <h2>
          Contributing
        </h2>

        <p>You can contribute by adding resources by adding a PR on <a href="https://github.com/Gilux/handy-web-tools">the Github repo</a>, adding a Markdown file in src/pages/resources, and linking its thumbnail in /static/img/uploads</p>
      </div>
    </AboutPage>
  </>
);