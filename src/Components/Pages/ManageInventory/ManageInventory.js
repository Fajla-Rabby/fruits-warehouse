import {  useNavigate } from 'react-router-dom';
import ItemsHook from '../../Hooks/ItemsHook';

const ManageInventory = () => {
    const [items, setItems] = ItemsHook();
    const navigate = useNavigate();

    const navigateToItemDetails = (id) => {
        navigate(`/inventory/${id}`);
    };

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://shrouded-plateau-29537.herokuapp.com/items/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = items.filter((item) => item._id !== id);
                    setItems(remaining);
                });
        }
    };

    return (
        <div>
            <h1>All Items</h1>
            <div className='mr-10'>
                <button className='btn btn-danger m-2'>Add New Item</button>
            </div>
            <div id='services' className='items'>
                <div className="row">

                    <div className="items-container">
                        {
                            items.map(item => (
                                <div key={item._id} className=' col-sm-12 col-md-6 col-lg-4'>
                                    <div
                                        className='card h-100 shadow p-2 mb-2 bg-white rounded'
                                        style={{ width: '23rem' }}
                                    >
                                        <img src={item.img} className='card-img-top' alt='...' />
                                        <div className='card-body'>
                                            <h5 className='card-title'>{item.Name}</h5>
                                            <h6 className='card-title'>Price: ${item.price}</h6>
                                            <h6 className='card-title'>Quantity: {item.Quantity}</h6>

                                        </div>
                                        <div className='card'>
                                            <button
                                                onClick={() => navigateToItemDetails(item._id)}
                                                className='btn btn-danger'
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className='btn btn-danger mt-2'
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;