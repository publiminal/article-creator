// ✨ implement axiosWithAuth
import React from "react";
import { Route, Redirect } from 'react-router-dom'

export const ProtectedRoute = props => {

    const { children, ...rest } = props

    return (
        <Route {...rest} render={(props) =>{
                if(localStorage.getItem('token')){
                    return children
                }else{
                    return <Redirect to='/' /* replace={true} */ />
                }
            }} 
        />     
    )
}