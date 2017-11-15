// Include React as a dependency
import React from "react";
import {Link} from 'react-router-dom';

// Include the Query and Results components
import Query from "./Home";
import Results from "./results";
import helpers from "../utils/helpers";
// Include the helpers for making API calls


  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  class Search extends React.Component {
    constructor() {
        super()
    this.state = {
      results: {}
    };
    this.setQuery = this.setQuery.bind(this);
  }

  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  setQuery(newQuery, newStart, newEnd) {
    helpers.runQuery(newQuery, newStart, newEnd).then(function(data) {
      this.setState({ results: { docs: data.docs } });
    }.bind(this));
  }

  // Render the component. Note how we deploy both the Query and the Results Components
  render() {

    return (
      <div className="main-container">
        <nav>
            <Link to = "/saved">View Saved</Link> 
            <Link to = "/">Home</Link>
        </nav>
        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <Query updateSearch={this.setQuery} />
        {/* Note how we pass in the results into this component */}
        <Results results={this.state.results} />
      </div>
      
    )
  }
};

// Export the module back to the route
export default Search;

