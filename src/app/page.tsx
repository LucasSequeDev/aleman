import { Counter } from '@/components/Counter'

export interface User {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}

export default async function HomePage() {
  const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = (await usersResponse.json()) as User[]

  return (
    <>
      <Counter />
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
          </div>
        )
      })}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perferendis nisi maiores ea reprehenderit
        saepe! Consectetur, eos. Corporis obcaecati dignissimos, architecto odio omnis tenetur voluptates explicabo non
        hic eligendi alias!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perferendis nisi maiores ea reprehenderit
        saepe! Consectetur, eos. Corporis obcaecati dignissimos, architecto odio omnis tenetur voluptates explicabo non
        hic eligendi alias!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perferendis nisi maiores ea reprehenderit
        saepe! Consectetur, eos. Corporis obcaecati dignissimos, architecto odio omnis tenetur voluptates explicabo non
        hic eligendi alias!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perferendis nisi maiores ea reprehenderit
        saepe! Consectetur, eos. Corporis obcaecati dignissimos, architecto odio omnis tenetur voluptates explicabo non
        hic eligendi alias!
      </p>
    </>
  )
}
