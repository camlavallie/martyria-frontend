import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Welcome" subtitle="God always trades up!" />
        <div className="container">
          <h2>Welcome</h2>
          <p>
          Here you can share your testimonies, pray for one another, and celebrate His goodness.
          </p>
          
        </div>
      </div>
    );
  }
}

export default Home