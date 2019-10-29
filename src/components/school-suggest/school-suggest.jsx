import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Autosuggest from "react-autosuggest";
import SchoolTemplate, { addSchoolCard } from "../../templates/school.jsx";

const schools = require("./schools.json");

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : schools.filter(
        school =>
          school.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div id="{suggestion.num}">{suggestion.name}</div>
);

class SchoolSuggest extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: "",
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected = (event, suggestion) => {
    // useSchoolList.addSchool(suggestion.suggestion.num)
    addSchoolCard2(suggestion.suggestion.num);
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Type a programming language",
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={this.onSuggestionSelected}
      />
    );
  }
}
export default SchoolSuggest;
/*import { useStaticQuery, graphql } from "gatsby";
import React, { useState, useEffect } from "react";

const SchoolSuggest = () => {
  const [searchInput, setSearchInput] = useState("");
  const data = useStaticQuery(graphql`
    query SuggestQuery {
      allSchulfinderRecordsJson {
        edges {
          node {
            name
            num
          }
        }
      }
    }
  `);
  const index = data.allSchulfinderRecordsJson.edges.map(({ node }) => node);
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    if (searchInput !== "") {
      const suggestions = index.filter(
        ({ name, num }) => name.indexOf(searchInput) > -1
      );
      setSuggestions(suggestions);
    }
  });

  return (
    <>
      <input
        type="text"
        value={searchInput}
        onChange={e => {
          setSearchInput(e.target.value);
        }}
      />
      <ul className="suggestions">
        {suggestions.map(({ name, num }) => (
          <li>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default SchoolSuggest;
*/
