import React, {Component} from 'react';
import ParkDetail from './ParkDetail';
import Navbar from './../../Styled-components/Navbar';

class ParkLocation extends Component{

    render(){
        
        return(
        
            <div>
                <Navbar/>
                    <ParkDetail/>
            </div>
    
        )
    }
      
    
}

export default ParkLocation