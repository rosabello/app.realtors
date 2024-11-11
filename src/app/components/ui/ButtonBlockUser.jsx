"use client";
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';

const ButtonBlockUser = ({id}) => {

    const router = useRouter()
    

  const onClick = async() =>  {
    const resp = await axios.put(`http://localhost:3001/api/users/${id}`)
    console.log(resp)
    router.refresh()
  }

  return (
    <button
    onClick={onClick}
    className="px-4 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg transition duration-300"
  >
    Block User
  </button>
  )
}

export default ButtonBlockUser