import React, { useEffect } from "react";
import utils from "../utils";

import {
  FiltersWrapper,
  Orderings,
  CurrencyFilters,
  CurrencyButton,
} from "../styles/ComponentStyles";

export default function CurrencyFilter({
  spendings,
  setSpendings,
  sortType,
  setSortType,
  setFilterType,
  filterType,
  originalSpendings,
}) {
  if (sortType === "-amount_in_huf") {
    utils.USDToHUF(spendings);
    spendings.sort((a, b) => {
      return b.filterAmount - a.filterAmount;
    });
  } else if (sortType === "amount_in_huf") {
    utils.USDToHUF(spendings);
    spendings.sort((a, b) => {
      return a.filterAmount - b.filterAmount;
    });
  } else if (sortType === "date") {
    spendings.sort((a, b) => {
      return new Date(a.spent_at) - new Date(b.spent_at);
    });
  } else {
    spendings.sort((a, b) => {
      return new Date(b.spent_at) - new Date(a.spent_at);
    });
  }

  useEffect(() => {
    filterSpendings(filterType);
  }, [filterType]);

  function filterSpendings(currency) {
    if (currency === "") {
      setSpendings(originalSpendings);
      return;
    }
    let filteredSpendings = originalSpendings;
    filteredSpendings = originalSpendings.filter((spending) => {
      return spending.currency === currency;
    });
    setSpendings(filteredSpendings);
  }
  return (
    <>
      <FiltersWrapper>
        <Orderings>
          <select
            onChange={(e) => {
              setSortType(e.target.value);
            }}
          >
            <option value="-date">Sort by Date descending (default)</option>
            <option value="date">Sort by Date ascending</option>
            <option value="-amount_in_huf">Sort by Amount descending</option>
            <option value="amount_in_huf">Sort by Amount ascending</option>
          </select>
        </Orderings>
        <CurrencyFilters>
          <li>
            <CurrencyButton
              name=""
              onClick={(e) => {
                setFilterType(e.target.name);
              }}
            >
              ALL
            </CurrencyButton>
          </li>
          <li>
            <CurrencyButton
              name="HUF"
              onClick={(e) => {
                setFilterType(e.target.name);
              }}
            >
              HUF
            </CurrencyButton>
          </li>
          <li>
            <CurrencyButton
              name="USD"
              onClick={(e) => {
                setFilterType(e.target.name);
              }}
            >
              USD
            </CurrencyButton>
          </li>
        </CurrencyFilters>
      </FiltersWrapper>
    </>
  );
}
