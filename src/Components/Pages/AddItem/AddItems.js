import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/items/`;
        fetch(url, 
            {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            } )
    };

    
    return (
        <div className='w-50 mx-auto'>
            <h1>Add Items</h1>
            <div className='bg-red-400 p-20'>
                <form className='d-flex flex-column bg' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' placeholder='Email' {...register("Email")} />
                    <input className='mb-2' placeholder='ImageURL' {...register("img")} />
                    <input className='mb-2' placeholder='Item Name' {...register("Name")} />
                    <textarea className='mb-2' placeholder='Description' {...register("Description")} />
                    <input className='mb-2' placeholder='Price' {...register("price")} />
                    <input className='mb-2' placeholder='Quantity' {...register("Quantity")} />
                    <input className='btn btn-danger' type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;