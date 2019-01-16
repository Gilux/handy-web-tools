import React from "react"

import PageHeader from "../components/PageHeader"
import CategoriesList from "../components/CategoriesList"
import ResourceItem from "../components/ResourceItem";
import ResourceList from "../components/ResourceList";

export default () => (
  <>
    <PageHeader />

    <main>
      <div className="container">
        <h1 className="text-center">
          About
        </h1>

        <p>
          Want to contribute ?
        </p>
      </div>
    </main>
  </>
);