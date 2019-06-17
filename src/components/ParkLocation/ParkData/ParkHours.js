import React from 'react';
import './styles.css';

const ParkHours = ({hours}) =>{
    if (hours) {
    return (
    <div>
        <h1>Horari</h1>
        <p>{hours}</p>
    </div>
    )
    }else{
        return null
    }
}

export default ParkHours;