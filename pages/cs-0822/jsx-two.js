import React from 'react'

export default function JsxTwo() {
  return (
    <>
      {/* 在JSX語法中, 空格會是無意義 */}
      <h1>JSX中各種值的渲染呈現</h1>
      <h2>Number</h2>
      {123}
      {1 + 1}
      <h2>String</h2>
      {'hello'}
      {`price = ${100 - 1}`}
      <h2>Boolean</h2>
      {/* 不呈現 */}
      {true}
      {false}
      <h2>null/undefined</h2>
      {/* 不呈現 */}
      {null}
      {undefined}
      <h2>Object</h2>
      {/* 物件不能直接渲染, 會造成錯誤 */}
      {/* 代表物件/函式不算React節點(React Node) */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>Function</h2>
      {/* 不呈現, 但console.log裡會有警告 */}
      {/* console.log會顯示 Functions are not valid as a React child */}
      {() => {}}
      <h2>Array</h2>
      {/* 類似於array.join("") */}
      {/* 陣列裡可以放JSX元素 */}
      {[1, 2, 3]}
    </>
  )
}
