// ✨ implement axiosWithAuth
import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL:'http://localhost:9000/api',
        headers:{
            authorization:token
        },
    })

}



/* import React from "react";
import { Route, Navigate } from 'react-router-dom'

export const ProtectedRoute = props => {

    const { children, ...rest } = props

    return (
        <Route {...rest} render={(props) =>{
                if(localStorage.getItem('token')){
                    return children
                }else{
                    return <Navigate to='/'  replace={true} />
                }
            }} 
        />     
    )
} */