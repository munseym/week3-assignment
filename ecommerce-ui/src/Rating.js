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
                <span>{this.props.rating.stars} stars</span>
                <span>&nbsp;{this.props.rating.reviews} reviews</span>
            </div>
        );
    }
}

export default Rating;