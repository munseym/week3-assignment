import React from 'react';
import Rental from './Rental';

export default class RentalList extends React.Component {
    render() {
        const rentalList = this.props.rentals
            .map((rental, idx) => {
                return (
                    <Rental
                        rental={rental}
                        onClick={this.props.onAddRental}
                        idx={idx}
                        key={idx}
                        buttonText='Add to cart'
                    />
                );
            });

        return (
            <div>
                <ul>
                    {rentalList}
                </ul>
            </div>
        );
    }
}