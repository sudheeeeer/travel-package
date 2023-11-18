import React from 'react';

export default function Item({ item, onDelete, onCheckbox }) {
    return (
        <li className='item'><input type='checkbox' value={item.packed} onClick={() => onCheckbox(item.id)} /><span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.quantity === 1 ? 'pair' : 'pairs'} {item.name}</span> <button onClick={() => onDelete(item.id)} className='button'>❌</button></li>
    );
}
