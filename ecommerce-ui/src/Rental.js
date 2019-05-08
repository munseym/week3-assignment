import React from 'react';
import Location from './Location';
import Host from './Host';
import Payment from './Payment';
import Rating from './Rating';

class Rental extends React.Component {

    render(){
        const {rental, onClick, idx, buttonText} = this.props;

        return (
            <div className="card">
                <Location location={rental.location} />
                <Host host={rental.host} />
                <Payment payment={rental.payment} />
                <Rating rating={rental.rating} />
                <button 
                    onClick={() => onClick(idx)}>{buttonText}
                </button>
            </div>
        );
    }
}

export default Rental;