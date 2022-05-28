import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import "./Items.css";

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div id='services' className='items'>
            <div className="row">
                <h1 className='title'>Our Items </h1>
                <div className="items-container">
                    {
                        items.map(item => <Item
                            key={item.id}
                            service={item}
                        ></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;