import React from 'react'

export default function ChildA(props) {
  return (
    <>
      <h1>Child-A</h1>
      {/* <p>props會接收來自父母元件傳入的pData, 再render出來自父母元件的資料: {props.pData}</p> */}
      <p>來自子女(B)的資料: {props.dataFromChild}</p>
    </>
  )
}
