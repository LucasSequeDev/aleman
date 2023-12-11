'use client'
import { User } from '@/app/page'
import React, { useEffect, useState } from 'react'

export const UserData = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((usersData) => {
        setUsers(usersData)
      })
  }, [])

  if (users.length === 0) return <div>No tengo usuarios</div>

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {users.map((user) => {
        return (
          <div className="text-orange-500 bg-gray-800 h-64 w-64 rounded-md" key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </div>
        )
      })}
    </div>
  )
}
