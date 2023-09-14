import { useState } from 'react'

export default function JsxFour() {
  const [total, setTotal] = useState(0)
  const isLoggedIn = false

  return (
    <>
      <h1>JSX中使用條件渲染 (condition render)是一種表達式</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
        role="presentation"
      >
        {total}
      </h1>
      {/* 意思是：如果total為true(使用truthy/falsy判斷), 則呈現後面的元素 */}
      {/* !! 或 Boolean : 強制轉為布林值 */}
      {/* 若使用以下語句, 畫面會顯示小0, 為什麼？{total && <h1>訊息：{total}</h1>} */}
      {/* 因為total預設為0, 0在truthy中為falsy, 因此自己本身跑出來了但後面出不來 */}
      {/* 三元表達式, if...else的條件渲染 */}
      {total > 0 && <h1>訊息：{total}</h1>}
      {/* 三元表達式： if...else的條件渲染 */}
      <div>{isLoggedIn ? <button>登出</button> : <button>登入</button>}</div>
    </>
  )
}
