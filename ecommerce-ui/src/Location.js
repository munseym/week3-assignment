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
                <span>{this.props.location.city}</span>,&nbsp;
                <span>{this.props.location.country}</span>
            </div>
        );
    }
}

export default Location;