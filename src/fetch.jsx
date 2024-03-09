import React, { Component } from 'react';

class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null
    };
  }

  componentDidMount() {
    // Replace 'your_api_endpoint' with the actual endpoint URL
    const apiUrl = 'your_api_endpoint';

    // Make a GET request to the API endpoint
    fetch("https://api.github.com/users")
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON response
        return response.json();
      })
      .then(data => {
        // Update the state with the fetched data
        this.setState({ data: data });
      })
      .catch(error => {
        // Update the state with the error
        this.setState({ error: error });
      });
  }

  render() {
    const { data, error } = this.state;

    // Render loading state if data is not fetched yet
    if (!data && !error) {
      return <div>Loading...</div>;
    }

    // Render error message if there's an error
    if (error) {
      return <div>Error: {error.message}</div>;
    }

    // Render fetched data
    return (
      <div>
      </div>
    );
  }
}

export default Fetch;
