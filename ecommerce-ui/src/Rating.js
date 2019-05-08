import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
    static propTypes = {
        rating: PropTypes.shape({
            stars: PropTypes.number,
            reviews: PropTypes.number
        }).isRequired
    }

    render() {
        return (
            <div>
                {this.props.rating.stars} stars {this.props.rating.reviews} reviews
            </div>
        );
    }
}

export default Rating;