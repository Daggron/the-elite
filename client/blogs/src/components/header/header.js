import React from 'react'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import { Toggle_Theme } from '../../redux/actions';

export default function Header() {
    const dispatch = useDispatch();
    const theme = useSelector(state=>state.theme)

    const toggleTheme = ()=>{
        dispatch(Toggle_Theme())
    }
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
                <input type="checkbox" onChange={toggleTheme} checked={theme==="dark"?true:false} />
            </div>
        </div>
    )
}
