import React from 'react'

function Footer({ items }) {

    let x = items.length;
    let y = items.filter((item) => item.packed).length
    let cal = Math.round((y / x) * 100)


    return (
        <footer className='footer'>{x === 0 ? "Add those things that need to be packed👍🏼" : y === 0 ? 'Are you ready to pack your things🤷‍♂️' : cal === 100 ? 'You packed everything and you are ready to go🚶🏼🚶🏼‍♂️' : `You have  ${x} items in the list , and you already packed ${y}(${cal}%)🙋`}</footer>
    )
}

export default Footer
