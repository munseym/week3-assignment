import React from 'react';
import PropTypes from 'prop-types';

class Payment extends React.Component {
    static propTypes = {
        payment: PropTypes.shape({
            cost: PropTypes.number,
            description: PropTypes.string
        }).isRequired
    }
    render() {
        return (
            <div>
                <span>Cost: {this.props.payment.cost}</span>
                <span>{this.props.payment.description ? `, ${this.props.payment.description}` : ''}</span>
            </div>
        );
    }
}

export default Payment;