import React from 'react';
import airbnbs from './airbnbs.json';
import Rental from './Rental';

class RentalList extends React.Component {
    render(){
        return (
            <div>
                {airbnbs.map((rental, i) => <Rental key={i} {...rental}/>)}
            </div>
        );
    }
}

export default RentalList;