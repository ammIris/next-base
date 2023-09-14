import { useState } from 'react'

export default function Counter() {
  // 宣告一組狀態, 是解構賦值 [getter, setter]
  // [getter (獲得值的變數), setter(設定值的函式)] = useState(初始值)
  // 在React中,唯一能改變total狀態的, 只有setTotal
  // useState --> 因按下後要改變數字, 背後需要變數, 在React中變數就是用狀態代表
  // total是常數, React如何能夠改變它的值？
  // 利用time slice, 一直不斷的換照片所以每次看到的都是不同張照片（不同照片[不同時間點]中的常數） React會保留以前的照片且一次只顯示一張
  // React背後運作的原理 快照模式 snapshot/時間切片 ! ! --> 每次狀態改變, React就會拍一張照片
  // onClick相當於JavaScript- addEventListener('click')
  // 而onClick等號後面的, 相當於addEventListener(function(){})的部分
  const [total, setTotal] = useState(0)

  return (
    <div>
      <h1
        onClick={() => {
          //這裡用setTotal是因, total要用setTotal來改變狀態
          setTotal(total + 1)
        }}
        role="presentation"
      >
        {total}
      </h1>
    </div>
  )
}
