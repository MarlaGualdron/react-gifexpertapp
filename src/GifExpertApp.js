import React, {useState} from 'react';

import {AddCategory} from './components/AddCategory'; 
import {GifGrid} from './components/GifGrid';


export const GifExpertApp = () => {

//const categories = ['one punch', ' Samurai x', ' Dragon Ball'];
// no debo mutar constantes 
const [categories,setCategories] = useState(['one punch']);

//const handleAdd = () => { 

    //setCategories(cats => [...cats, 'HunterxHunter']);
//}

return (
    <>
    
    <h2> GifExpertApp </h2>
   
    <AddCategory setCategories= {setCategories}/> 
    
    <hr/>
  

    <ol>

 
   {
       categories.map( category => (
            <GifGrid 
                key={category}
                category = { category} 
                />
            
       ))

    }
    </ol> 
    
        
    
    </>
    )
}