import { useEffect, useState } from 'react';

const ItemsHookDetails = (itemId) => {
    const [item, setItem] = useState({});

  useEffect(() => {
    const url = `https://young-headland-60416.herokuapp.com/book/${itemId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [itemId]);
  return [item];
};

export default ItemsHookDetails;