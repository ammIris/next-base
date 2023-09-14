import React from 'react'

export default function JsxTwoPrac() {
  return (
    <>
      <h1>JSX中各種值的渲染呈現</h1>
      <h2>Charlie Phone Number</h2>
      {'0' + 956}
      {87 + '1123'}
      <hr />
      <h2>String</h2>
      {'汪蘇瀧'}
      {`price = ${99 + 1}`}
      <hr />
      <h2>Boolean</h2>
      {true}
      {false}
      <hr />
      <h2>null/undefined</h2>
      {null}
      {undefined}
      <hr />
      <h2>Object</h2>
      {/* React中, 物件不能直接渲染 */}
      {{ a: 1, b: 2 }}
      <hr />
      <h2>Fuction</h2>
      {() => {}}
      <hr />
      <h2>Array</h2>
      {/* ？？？ */}
      {/* 類似於array.join("") */}
      {/* 陣列裡可以放JSX元素 */}
      {[1, 2, 3]}
    </>
  )
}
