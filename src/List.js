import React from 'react'
import { useState } from 'react';
import Item from './Item';

function List({ items, onDelete, onCheckbox, onClear }) {
    const [sort, setSort] = useState('addOrder')
    let sortedOrder;
    if (sort === 'addOrder') sortedOrder = items;
    if (sort === "AlpOrder") sortedOrder = items.slice().sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'packedOrder') sortedOrder = items.slice().sort((a, b) => b.packed - a.packed)
    console.log(sortedOrder)
    return (
        <div className='list'>
            <ul>
                {sortedOrder.map((item) => <Item item={item} onDelete={onDelete} onCheckbox={onCheckbox} key={item.id} />)}
            </ul>
            <div>
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value='addOrder'>By adding order</option>
                    <option value='AlpOrder'>By Alphabetic order</option>
                    <option value='packedOrder'>By Packed order</option>
                </select>
                <button onClick={onClear} className='btn'>Clear</button>
            </div>
        </div>
    )
}
export default List
