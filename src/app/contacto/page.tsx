'use client'
import React, { FormEvent, useState } from 'react'
import { UserData } from '@/components/UserData'

export default function ContactPage() {
  const [mailSent, setMailSent] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nombre = event.currentTarget.nombre.value

    const data = await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({ nombre })
    })
    const res = await data.json()
    setMailSent(true)
    setMessage(res.mailSent)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="nombre" placeholder="Nombre" />
          <button>Enviar💌</button>
        </form>
        {mailSent && (
          <div>
            <p className="text-green-700">{message}</p>
          </div>
        )}
      </div>
      <UserData />
      contacto
    </>
  )
}
