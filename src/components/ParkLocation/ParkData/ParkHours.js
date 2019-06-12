import React from 'react';
import './styles.css';

const ParkHours = ({hours}) =>(
    <div className="parkHoursCont">
        <h1>Horari</h1>
        <p>{hours}</p>
    </div>
)

export default ParkHours;