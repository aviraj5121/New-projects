import React,{useEffect}from 'react'
import jwt_decode from 'jsonwebtoken';
const Dashboard = () => {
    useEffect(()=>{
        const token = localStorage.getItem('token')
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Dashboard
