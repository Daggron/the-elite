import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className="Header">
            <div className="header-bar-title">
                <h2 className="title">
                    The Elite
                </h2>
                <p>
                    Blog by <a href="https://twitter.com/stark_abhay" target="__blank" rel="noopener noreferrer"> Abhay Sharma </a>
                </p>
            </div>
            <div className="button">
                <input type="checkbox" defaultChecked={false} />
            </div>
        </div>
    )
}
