import React, {useState, useEffect} from 'react';
import {api_park_list} from './../constants/api_url';
import {Link} from 'react-router-dom';

const ParkList = () =>{
    useEffect (() => {
        fetchItems();
    },[])

    const [items, setItems] = useState([]);
        
        const fetchItems = async () => {
            const data = await fetch (api_park_list);
            const items= await data.json();
           
            console.log(items.items)
            setItems(items.items);     
        }
    
    return(
    
       <div>
            {items.map(item => (
                <h2 key={item.articleId}>
                    <Link to={`/${item.articleId}`}>
                        <p>{item.titol}</p>
                        <p>{item.municipis}</p>
                        <img src={item.imatge_principal.imatge_principal_fitxer_4x3_miniatura} alt="imagen"></img>
                    </Link>
                </h2>
            ))}
                
        </div>
        )
}


export default ParkList