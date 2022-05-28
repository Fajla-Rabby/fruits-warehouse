import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const ManageInventory = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

   
    return (
        <div>
            <h1>All Items</h1>
            <div className='mr-10'>
                <button className='btn btn-danger m-2'>Add New Item</button>
            </div>
            <div id='services' className='items'>
            <div className="row">
                <h1 className='title'>Our Items </h1>
                <div className="items-container">
                    {
                        items.map(item => <Item
                            key={item._id}
                            service={item}
                        ></Item>)
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default ManageInventory;