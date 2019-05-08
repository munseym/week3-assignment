import React from 'react';
import PropTypes from 'prop-types';

class Location extends React.Component {
    static propTypes = {
        location: PropTypes.shape({
            city: PropTypes.string,
            country: PropTypes.string
        }).isRequired
    }    
    render() {
        return (
            <div>
                {this.props.location.city}, {this.props.location.country}
            </div>
        );
    }
}

export default Location;