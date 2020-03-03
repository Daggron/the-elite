import React from 'react'
import Header from '../header/header'
import { useSelector } from 'react-redux'

export default function Home() {
    const theme = useSelector(state=>state.theme)
    return (
        <div className={["Home"+theme]}>
            {console.log(theme)}
            <Header />
        </div>
    )
}
