'use client'
import React from 'react'
import { Title } from '@/components/Title'
import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <Title title={count.toString()} />
      <button onClick={increment}>Incrementar ➕</button>
    </>
  )
}
