import React from 'react'
import './blogs.css'

export default function Blogs() {
    const [mockBlogs , setMockBlogs] = React.useState([{
        title : "Good Bye Clean Code , Hello Good code 🍵",
        data : "<p>This is some cool Shit </p>",
        tagLine : "I got this"
    }])
    return (
        <div className="blogs-container">
            <div className="blog">
                <div className="heading">
                    {
                        mockBlogs[0].title
                    }
                </div>
            </div>
        </div>
    )
}
