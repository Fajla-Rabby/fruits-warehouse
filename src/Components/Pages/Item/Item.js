import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Item.css";

const Item = ({ item }) => {
    const {name, img, price, id} = item || {};
    const navigate = useNavigate();
    const navigateToServiceDetail = ()=> {
        navigate('/item/${id}');
    }

    return (
       <div className='service'>
            <img className='images' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>            
            <button onClick={() => navigateToServiceDetail()} className='button'>Update Now</button>
        </div>
    );
};

export default Item;