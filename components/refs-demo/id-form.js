import React from 'react'

export default function IdForm() {
  return (
    <>
      <h1>IdForm</h1>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          // .focus進行聚焦
          // 事件處理函示()=>{}, 位在的還是不是這個元件的作用域
          // 用id寫的元件, 沒有可重複利用性
          // 於javascript抓id, 若有2個, 會抓第一個
          document.getElementById('my-input').focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          // .blur
          document.getElementById('my-input').blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          // .blur
          console.log(document.getElementById('my-input').value)
        }}
      >
        獲得值
      </button>
    </>
  )
}
