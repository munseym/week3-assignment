import React from 'react';
import PropTypes from 'prop-types';

class Host extends React.Component {
    static propTypes = {
        host: PropTypes.shape({
            name: PropTypes.number,
            isSuperhost: PropTypes.bool
        }).isRequired
    }

    render() {
        return (
            <div>
                <span>{this.props.host.name}</span>
                <span>{this.props.host.isSuperhost ? ', Superhost' : ''}</span>

            </div>
        );
    }
}

export default Host;