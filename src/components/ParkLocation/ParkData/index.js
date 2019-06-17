import React from 'react';
import ParkPicture from './ParkPicture';
import ParkHours from './ParkHours';
import ParkAddress from './ParkAddress';
import ParkInfo from './ParkInfo';
//import {api_park} from './../../../constants/api_url'
import './styles.css';
import HoursStyle from './../../Styled-components/HoursStyle';


const ParkData = ({address, hours, picture, info}) =>(

    <div>
        
        <ParkPicture 
        picture={picture}
        />

        <ParkInfo 
            summary={info}        
        />
        <HoursStyle>
            <ParkHours 
            hours={hours}    
            />
        </HoursStyle>  
        
        <ParkAddress 
            address={address}
        />
        
    </div>
)

export default ParkData