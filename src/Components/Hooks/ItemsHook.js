import { useEffect, useState } from 'react';

const ItemsHook = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch('https://shrouded-plateau-29537.herokuapp.com/items')
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, []);
    return [items, setItems];
};

export default ItemsHook;