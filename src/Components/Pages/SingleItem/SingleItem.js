import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const singleItems = () => {
    // const { itemsID } = useParams();
    // const [items, setItems] = useState({});

    // useEffect( () =>
    // {
    //     const  url = `http://localhost:5000/items/${itemsID}`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => setItems(data));
    // })

    return (
        <div>
            <h2>Welcome to detail: {}</h2>
        </div>
    );
};

export default singleItems;