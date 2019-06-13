import React, {useState, useEffect} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import ParkData from './ParkData/index';
import {api_rest} from './../../constants/api_url';


 function ParkDetail({match}){
    useEffect( () => {
        fetchItem();
        console.log(match)
        
    }, []);
    
    const [item, setItem] = useState({
        items:[{localitzacio:{}, imatge_principal:{},municipis:[],bloc_auxiliars:[{}]}],
    });
    const [isLoading, setIsLoading]=useState(true);
   
    


    const fetchItem = async () => {
        const fetchItem= await fetch(`api/equipaments?articleId=${match.params.id}${api_rest}`);
        setIsLoading(true);
        const item=await fetchItem.json();
        setItem(item);
      
        setIsLoading(false);
        console.log(item);    
    }

       
       if(isLoading === true ) return <div>
           <h1>CARGANDO</h1>
           <CircularProgress size={60}/>
        </div>
       
       

    return (
        <div>
            <Location park={item.items[0].titol} city={item.items[0].municipis}/>
       
            <ParkData 
            
            info={item.items[0].entradeta}
            address={item.items[0].localitzacio.localitzacio_adreca}
            picture={item.items[0].imatge_principal.imatge_principal_fitxer}
            hours={item.items[0].bloc_auxiliars[2].valor} 
            />
            
        </div> 
    )
    
}


export default ParkDetail