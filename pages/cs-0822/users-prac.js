import React from 'react'
import data from '@/data/users.json'
// 於JavaScript引入json檔, 會自動被解析為JavaScript物件
export default function UsersPrac() {
  console.log(data)
  return (
    <>
      {data.users.map((v, i) => {
        return (
          <li key={v.id}>
            {v.name}/{v.email}
          </li>
        )
      })}
    </>
  )
}
