import React from 'react'
// 引入json檔後, 會自動將資料轉為JavaScript格式 是利用JSON.parse(放json字串)
// 做物件解構{users}
// 花括弧 --> 就是抓取部分資料
// { users } --> 有點parse()的感覺
import data from '@/data/users.json'

export default function Users() {
  console.log(data)
  return (
    <>
      {data.users.map((v, i) => {
        return (
          <li key={i}>
            {v.name}/{v.email}
          </li>
        )
      })}
    </>
  )
}
