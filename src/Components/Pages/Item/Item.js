import React from 'react';
import { useNavigate } from 'react-router-dom';
import Items from '../Items/Items';
import "./Item.css";

const Item = (item) => {
    const { name, img, price, _id } = item || {};
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate('/item/${id}');
    }

    const  handleDelete = id =>
    {
        const proceed = window.confirm('Are You sure?');
        if(proceed)
        {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = Items.filter(item => item._id !== id);
                // setItems(remaining);
            })
        }
    }
    return (
        <div className='service'>
            <img className='images' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <div className='flex justify-center m-1'>
                <button onClick={() => navigateToServiceDetail()} className='button m-1'>Update</button>
                <br />
                <button onClick={() => handleDelete(_id)} className='button m-1'>Delete</button>
            </div>
        </div>
    );
};

export default Item;