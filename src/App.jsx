import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import { Noun } from "./components/Noun";
import { Book } from "./components/Book";
import { TechPerson } from "./components/TechPerson";
import { Setting } from "./components/Setting";
import { Employee } from "./components/Employee";
import { Translation } from "./components/Translation";
import { Job } from "./components/Job";
import { LandscapePhoto } from "./components/LandscapePhoto";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

// const baseUrl = "https://api-library-backend-ejs.herokuapp.com";
const url = `${backendUrl}/all`;
const separator = "|";

function App() {
  const [searchItems, setSearchItems] = useState([]);
  const [filteredSearchItems, setFilteredSearchItems] = useState([]);

  useEffect(() => {
    (async () => {
      const siteData = (await axios.get(url)).data;
      const _searchItems = [];

      siteData.nouns.forEach((item) => {
        _searchItems.push({
          kind: "noun",
          bulkSearch: item.singular,
          item,
        });
      });

      siteData.books.forEach((item) => {
        _searchItems.push({
          kind: "book",
          bulkSearch: item.title + separator + item.description,
          item,
        });
      });

      siteData.techPersons.forEach((item) => {
        _searchItems.push({
          kind: "techPerson",
          bulkSearch:
            item.fullName + separator + item.quickInfo + separator + item.body,
          item,
        });
      });

      Object.entries(siteData.settings).forEach((entry) => {
        const key = entry[0];
        const value = entry[1];
        _searchItems.push({
          kind: "setting",
          bulkSearch: key + separator + value,
          item: {
            key,
            value,
          },
        });
      });

      siteData.employees.forEach((item) => {
        _searchItems.push({
          kind: "employee",
          bulkSearch: item.FIRST_NAME + separator + item.LAST_NAME,
          item,
        });
      });

      siteData.translations.forEach((item) => {
        _searchItems.push({
          kind: "translation",
          bulkSearch:
            item.fromLanguage +
            separator +
            item.toLanguage +
            separator +
            item.fromPhrase +
            separator +
            item.toPhrase,
          item,
        });
      });

      siteData.jobs.forEach((item) => {
        _searchItems.push({
          kind: "job",
          bulkSearch: item.html,
          item,
        });
      });

      siteData.landscapePhotos.forEach((item) => {
        _searchItems.push({
          kind: "landscapePhoto",
          bulkSearch: item,
          item,
        });
      });

      setSearchItems(_searchItems);
      setFilteredSearchItems([]);
    })();
  }, []);

  const handleSearch = (e) => {
    const searchText = e.target.value.trim();
    let _filteredSearchItems = [];
    if (searchText.length >= 3) {
      _filteredSearchItems = searchItems.filter((m) =>
        m.bulkSearch.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredSearchItems(_filteredSearchItems);
    }
    if (searchText === "") {
      _filteredSearchItems = [];
      setFilteredSearchItems(_filteredSearchItems);
    }
  };

  return (
    <div className="App">
      <h1>Search Info</h1>
      {Object.keys(searchItems).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <>
          <input
            className="searchBox"
            type="text"
            autoFocus
            onChange={(e) => handleSearch(e)}
          />
          {filteredSearchItems.map((item, i) => {
            return (
              <React.Fragment key={i}>
                {item.kind === "noun" && <Noun item={item.item} />}
                {item.kind === "book" && <Book item={item.item} />}
                {item.kind === "techPerson" && <TechPerson item={item.item} />}

                {item.kind === "setting" && <Setting item={item.item} />}
                {item.kind === "employee" && <Employee item={item.item} />}
                {item.kind === "translation" && (
                  <Translation item={item.item} />
                )}
                {item.kind === "job" && <Job item={item.item} />}
                {item.kind === "landscapePhoto" && (
                  <LandscapePhoto item={item.item} baseUrl={baseUrl} />
                )}
              </React.Fragment>
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
