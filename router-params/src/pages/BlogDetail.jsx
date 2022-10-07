import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";


export default function BlogDetail(){
// buat variable id lalu destuk,declare
    const { id, slug } = useParams()

// state
const [data, setData]= useState()

// comp did mount 
useEffect(()=>{

    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}` )
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>{
        console.error(err)
    })
}, [])

    if(!data){
        return(
            <MainLayout>
                Loading..
            </MainLayout>
        )
    }
    return (
        <MainLayout>
           <h1> {data.title} </h1> 
           <p> {data.body} </p>
        
        </MainLayout>
    )
}