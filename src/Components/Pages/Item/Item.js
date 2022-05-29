import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Item.css";

const Item = ({ item }) => {
    const { _id, name, img, Description, price, quantity } =
        item;
    const navigate = useNavigate();

    const navigateToItemDetails = (id) => {
        navigate(`/manageinventory/${id}`);
    };

    return (

        <div className='service'>
            <img className='images' src={img} alt="" />
            <h2>{name}</h2>
            <p>Details: {Description}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>

            <div className='flex justify-center m-1'>
                <button onClick={() => navigateToItemDetails(_id)} className='button m-1 bg'>Update</button>


            </div>
        </div>
    );
};

export default Item;