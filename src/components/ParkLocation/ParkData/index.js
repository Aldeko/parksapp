import React from 'react';
import ParkPicture from './ParkPicture';
import ParkHours from './ParkHours';
import ParkAddress from './ParkAddress';
import ParkInfo from './ParkInfo';
//import {api_park} from './../../../constants/api_url'
import './styles.css';

const ParkData = ({address, hours, picture, info}) =>(

    <div className="parkDataCont">
        <ParkPicture 
        picture={picture}
        />
        
        <ParkInfo 
            summary={info}        />

        <ParkHours 
            hours={hours}    
        />
        
        <ParkAddress 
            address={address}
        />
        
    </div>
)

export default ParkData