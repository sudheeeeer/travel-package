import React from 'react'
import { useState } from 'react';

function SubHead({ change }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);



    function handleform(e) {
        e.preventDefault()
        if (!name) return
        const newItem = { name, quantity, packed: false, id: Date.now() }
        // console.log(newItem);
        change(newItem)
        setName('')
        setQuantity(1)


    }

    return (
        <form className='subhead' onSubmit={handleform}>
            <h3 style={{ margin: 0 }}>What do you need for your trip😎?</h3>
            <select value={quantity} onChange={e => setQuantity(e.target.value)}>{Array.from({ length: 20 }, (_, i) => i + 1).map((option) => <option>{option}</option>)}</select>
            <input type='text' placeholder='Add items...' value={name} onChange={e => setName(e.target.value)}></input>
            <button>ADD</button>
        </form>
    )
}
export default SubHead