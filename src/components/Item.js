import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div className='design'>
                <div className='container3'>
                    <div className='title'>
                        <h1>Backend & Frontend</h1>
                        <p>The Difference Between Frontend And Backend Development.</p>
                    </div>
                    <div className='design-content'>
                        <div className='design-item'>
                            <img src={"./imeg/full.jpeg"} />
                        </div>
                    </div>
                </div>
                <div className='nav'>
                    <ul>
                        <li><a href='#'>Mune</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Portfolio</a></li>
                        <li><a href='#'>Section</a></li>
                        <li><a href='#'>Design</a></li>
                        <li><a href='#'>Contacts</a></li>
                    </ul>
                </div>
                <div className='lorem'>
                    <div className='text-lorem'>
                        <a> The concept of frontend refers to the development of an interface visible to the user and all the functions with which he can interact. In fact, when you go to any website, you see buttons, text, various animations and other components - all this is implemented using the frontend. Three different languages are used to create these elements - HTML, CSS and JavaScript.</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item