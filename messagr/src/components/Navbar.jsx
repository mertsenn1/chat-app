import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Messagr</span>
            <div className='user'>
                <img src="" alt=""></img>
                <span>John</span>
                <button>logout</button>
            </div>
        </div>

    )
}

export default Navbar;