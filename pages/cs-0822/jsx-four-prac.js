import { useState } from 'react'

export default function JsxFourPrac() {
  const [total, setTotal] = useState(0)
  const isLoginIn = false
  return (
    <>
      <h1>點選切換數字</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
        role="presentation"
      >
        {total}
      </h1>
      <br />
      {total > 0 && <h1>訊息：{total}</h1>}
      {isLoginIn ? <button>登出</button> : <button>登入</button>}
    </>
  )
}
