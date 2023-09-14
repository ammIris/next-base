import { useState, useEffect } from 'react'

export default function ChildB(props) {
  const [cData, setCData] = useState('child-b data')

  //子女b從props屬性接到setDataFromChild函式, 但函式麻煩的地方在於, 函式要呼叫才會工作

  // useEffect語法 useEffect(()=>{}, []),會在這個初次渲染後立即執行，並且只會執行一次
  // useEffect, 因作用域在全域(而不是在元件中), 所以可以處理副作用
  // 利用useEffect, 在一開始資料呈現時, 回送資料給父母
  // 若使用useEffect就無需用按鈕呼叫函式

  // --------- 關於送資料給子女a ----------
  // 利用useEffect一開始呈現時，回送資料回父母
  useEffect(() => {
    // 利用props接收來自父母的狀態
    props.setDataFromChild(cData)
  }, [])

  return (
    <>
      <h1>Child-B</h1>
      {/* <button
        // 函式需要呼叫才會執行, 因此要設定事件觸發, 就是呼叫函式的意思
        onClick={() => {
          // onClick後, 執行從props來的setDataFfromChild
          // cData, 是要回傳資料給父母
          props.setDataFromChild(cData)
        }}
      >
        送資料給父母
      </button> */}

      {/* 利用事件觸發 */}
      {/* 傳資料回父母元件 */}
      {/* <button
        onClick={() => {
          props.setDataFromChild(cData)
        }}
      >
        送資料給子女-A !
      </button> */}
    </>
  )
}
