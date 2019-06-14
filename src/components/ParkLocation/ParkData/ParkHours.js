import React from 'react';
import './styles.css';

const ParkHours = ({hours}) =>{
    if (hours) {
    return (
    <div className="parkHoursCont">
        <h1>Horari</h1>
        <p>{hours}</p>
    </div>
    )
    }else{
        return null
    }
}

export default ParkHours;