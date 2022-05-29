import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import "./Items.css";

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-plateau-29537.herokuapp.com/items')
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <div id='services' className='items'>
            <div className="row">
                <h1 className='title'>Our Items </h1>
                <div className="items-container">
                    {items.slice(0, 6).map((item) => (
                        <Item key={item._id} item={item}></Item>
                    ))}
                    <div>
                        <Link to='/manageinventory'>
                            <button className='btn btn-danger'>Manage Items</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Items;