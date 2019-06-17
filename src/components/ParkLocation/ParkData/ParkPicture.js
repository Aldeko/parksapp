import React from 'react';
import './styles.css';

const ParkPicture = ({picture}) => (
    <div className="parkPictureCont">
        <img src={picture} alt="park1" className="responsive"/>
    </div>
)

export default ParkPicture;