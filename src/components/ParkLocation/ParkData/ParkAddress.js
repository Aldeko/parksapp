import React from 'react';
import './styles.css';

const ParkAddress = ({address}) => (
    <div className="parkAddressCont">
        <h1>Adreça</h1>
        <p>{address}</p>
    </div>
)

export default ParkAddress;