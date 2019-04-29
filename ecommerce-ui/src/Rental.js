import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import Host from './Host';
import Payment from './Payment';
import Rating from './Rating';

class Rental extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        houseType: PropTypes.string,
        image: PropTypes.string,
        location: PropTypes.shape({
            city: PropTypes.string,
            country: PropTypes.string
        }),
        payment: PropTypes.shape({
            cost: PropTypes.number,
            description: PropTypes.string,
        }),
        host: PropTypes.shape({
            name: PropTypes.string,
            isSuperhost: PropTypes.bool
        }),
        rating: PropTypes.shape({
            stars: PropTypes.number,
            reviews: PropTypes.number
        }),
    }
    render(){
        return (
            <div className="card">
                <Location location={this.props.location} />
                <Host host={this.props.host} />
                <Payment payment={this.props.payment} />
                <Rating rating={this.props.rating} />
            </div>
        );
    }
}

export default Rental;