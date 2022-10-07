import React from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"


export default function Blog(){
// buat variable id lalu destuk,declare
    
// state
const [content, setContent] = useState([])

/
// com didmount useeffect


// component did mount
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.info(res.data)
        setContent(res.data)
    })
    .catch((err)=>{
        console.error(err)
    })
}, [])

    return (
        <MainLayout>
            <h1>Page Blog</h1>

            <div className="blog-wrapper">

                {content.map((e)=>{
                    return (
                        <span key={e.id}>
                            <h3>{e.title}</h3>
                            <p>{e.body}</p>

                            <Link to={`/blog/${e.id}/${e.title}`}>Detail</Link>
                        </span>
                    )
                })}

            </div>
            
        </MainLayout>
    )
}