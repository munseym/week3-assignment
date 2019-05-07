import React, { Component } from 'react';
import './App.css';
import RentalList from './RentalList';
import ShoppingCart from './ShoppingCart';
import airbnbs from './airbnbs.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rentals: []
    };
  }

  addRental = (idx) => {
    const selectedRental = airbnbs[idx];
    if (this.state.rentals.includes(selectedRental)) {
      alert('You already selected that rental.');
      return;
    }

    this.setState(prevState => {
      return {
        rentals: [...prevState.rentals, selectedRental]
      };
    });
  }

  deleteRental = (idx) => {
    this.setState(prevState => {
      const rentals = [...prevState.rentals];
      rentals.splice(idx, 1);

      return {
        rentals
      };
    });
  }

  render() {
    return (
      <div>
        <div>
          <ShoppingCart rentals={this.state.rentals}
            onDeleteRental={this.deleteRental}
          />
        </div>
        <div className="App">
          <RentalList rentals={airbnbs}
            onAddRental={this.addRental}
          />
        </div>
      </div>
    );
  }
}

export default App;
