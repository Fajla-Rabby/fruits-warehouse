import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Item.css";

const Item = (item) => {
    const { name, img, price, _id } = item || {};
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate('/item/${id}');
    }

    return (
        <div className='service'>
            <img className='images' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <div className='flex justify-center m-1'>
                <button onClick={() => navigateToServiceDetail()} className='button m-1'>Update</button>
                <br />
                <button onClick={() => navigateToServiceDetail()} className='button m-1'>Delete</button>
            </div>
        </div>
    );
};

export default Item;