import React from 'react';
import './item-status-filter.css'

const filterButtons=[
    {name:'all',label:'All'},
    {name:'active',label:'Active'},
    {name:'done',label:'Done'},

];
const ItemStatusFilter = ()=>{

    const buttons=filterButtons.map(({name,label})=>{

    return(

             <button
                 key={name}
                 type="button"
                className="btn btn-info">{label}</button>

    )});

    return(
            <div className="btn-group">
        {buttons}
            </div>

    );

};

export default ItemStatusFilter;