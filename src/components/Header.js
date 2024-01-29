


import React from 'react'

export default function Header() {
    return (
        <header>
            <nav className='navbar'>
                <div className='container'>
                    <div className='navigation'>
                        <div className='logo'>
                            <a href='#'>Back & Front&copy;</a>
                        </div>
                        <div className='navbar-nav'>
                            <a href='#'> Home</a>
                            <a href='#'> Site</a>
                            <a href='#'> Blok</a>
                            <a href='#'> Contact</a>
                        </div>
                    </div>
                    <div className='header_lang'>
                        <a href='rus'>Rus</a>
                        <span>|</span>
                        <a href='eng'>Eng</a>
                        <span>|</span>
                        <a href='uz'>Uzb</a>
                    </div>
                </div>
            </nav> 
            <div className='container1'>
                <div className='box'>
                    <input type='text' placeholder='Search...'/>
                    <a href='#'>
                        <i class="fas fa-search"></i>
                    </a>
                </div>
                <div className='banner'>
                    <div className='container2'>
                        <h1 className='banner-title'>
                            <span> IT.</span> Backend
                        </h1>
                        <p>Backend development and Frontend using the example of website creation</p>
                    </div>
            </div>
            </div>
        </header>

        
    )
}
