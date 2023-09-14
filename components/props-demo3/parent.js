import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // 定義父母內部的私有狀態, 這狀態我們可以透過『屬性』傳給子女
  const [pData, setPData] = useState('parent data')

  // 子女b有自己內部的資料
  // Q: 子女b的資料要如何傳給父母?
  // A: 要在父母元件中, 特地設置一個狀態, 這個狀態準備接收從子女b來的資料
  const [dataFromChild, setDataFromChild] = useState('')
  return (
    <>
      <h1>Parent</h1>
      {/* 因子女b利用props.setDataFromChild(cData), 回傳資料給父母, */}
      {/* 若狀態有改變他會把dataFromChild顯示出來 */}
      <p>來自子女b的資料: {dataFromChild}</p>
      {/* <ChildA pData={pData} /> */}
      <ChildA dataFromChild={dataFromChild} />
      {/* setDataFromChild該函式的目的是更新父元件 Parent 中的狀態 */}
      {/* <ChildB setDataFromChild={setDataFromChild} />，你實際上是將這個狀態更新函式傳遞給子元件 ChildB */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
