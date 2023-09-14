import React from 'react'

export default function JsxOne() {
  // return只能回傳一個值/一個表達式
  // 要包在有開頭結尾的<></>
  // 一個return不能接2個函式呼叫, 因只能創建一個creatElement？
  const a = (
    <div>
      <h1>123</h1>
      <p>123</p>
    </div>
  )

  const b = (
    <>
      <h1>123</h1>
      <p>123</p>
    </>
  )
}
