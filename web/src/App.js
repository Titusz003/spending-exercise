import React, { useState } from "react";
import Form from "./components/Form";
import FiltersAndOrderings from "./components/FiltersAndOrderings";
import SpendingList from "./components/SpendingList";
import Layout from "./components/Layout";

export default function App() {
  const [spendings, setSpendings] = useState([]);
  const [originalSpendings, setOriginalSpendings] = useState([]);
  const [fetchSwitch, setFetchSwitch] = useState(true);
  const [sortType, setSortType] = useState();
  const [filterType, setFilterType] = useState();

  return (
    <>
      <Layout>
        <Form fetchSwitch={fetchSwitch} setFetchSwitch={setFetchSwitch} />
        <FiltersAndOrderings
          spendings={spendings}
          setSpendings={setSpendings}
          sortType={sortType}
          setSortType={setSortType}
          filterType={filterType}
          setFilterType={setFilterType}
          originalSpendings={originalSpendings}
        />
        <SpendingList
          spendings={spendings}
          setSpendings={setSpendings}
          fetchSwitch={fetchSwitch}
          setOriginalSpendings={setOriginalSpendings}
        />
      </Layout>
    </>
  );
}
