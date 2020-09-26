// Write your Character component here

import React, { Component,useState } from 'react'; 
import CharacterCard from './CharacterCard';


const Characters = (props) => {
    const { data } = props;
    console.log(data)
    return (
        <div>
            {data.map((item,index)=>{
                return (
                <div>
                    <CharacterCard key={index} character={item}/>
                </div>
                )
            })}
        </div>
    )
}
export default Characters;