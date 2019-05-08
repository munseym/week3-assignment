import React from 'react';
import Rental from './Rental';

class ShoppingCart extends React.Component {
    render() {
        let cost = 0;
        const rentalList = this.props.rentals
            .map((rental, idx) => {
                cost += rental.payment.cost;
                return (
                    <li key={idx}>
                        <span>
                            <Rental
                                rental={rental}
                                onClick={this.props.onDeleteRental}
                                idx={idx}
                                key={idx}
                                buttonText='Remove from cart'
                            />
                        </span>
                    </li>
                );
            });

            return (
            <div className="shopping-cart">
                <div>
                    <span role="img" aria-label="Shopping Cart" className="shopping-cart-header">🛒</span>
                    <span>Shopping Cart</span>
                </div>
                <div>
                    <ul>
                        {this.props.rentals.length === 0 ? 'Empty' : rentalList}
                    </ul>
                </div>
                <div>
                    Cost: {cost}
                </div>
            </div>
        );
    }
}

export default ShoppingCart;