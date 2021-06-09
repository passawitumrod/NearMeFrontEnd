import React from 'react';

class ApiTest extends React.Component {
  state = {
    contacts: []
};

  componentDidMount() {
    const apiUrl = 'https://cold-squid-62.loca.lt/api/accounts/customers/1/';
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data))
      .then((data) => {
        this.setState({ contacts: data })
    })
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default ApiTest;
