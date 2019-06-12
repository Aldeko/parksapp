import React from 'react';
import './styles.css';

const ParkInfo = ({summary}) => (
    <div className="parkInfoCont">
        <p>{summary}</p>
    </div>
)

export default ParkInfo;