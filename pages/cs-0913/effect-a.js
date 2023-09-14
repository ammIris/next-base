import { useEffect } from 'react'
import { useState } from 'react'

export default function EffectA() {
  const [total, setTotal] = useState

  // 樣式1: 每次render都會執行(很少用到的樣式，通常出現在自訂勾子裡) 會是開發者自訂鉤子比較會用到
  useEffect(() => {
    console.log('每次render都會執行這裡一次')
  })

  //樣式2:
  // 應用一：第一次向伺服器(資料庫)要資料ex: 產品頁面
  // 應用二: 整合不可控元件, 加入自訂事件, 初始化js程式碼(使用連結引入bootstrap, css讓它第一次就讀到這東西：初始化)
  //[], 會保持他是空陣列
  useEffect(() => {
    // 和伺服器要資料, 在拿過來呈現
    console.log('初次render後(相當於掛載mount之後)執行這裡一次, 之後不會再執行')
  }, [])
  // ^^這裡保持空陣列, 稱為相依性陣列, 空陣列代表不與任何相依變數關聯, 套用預設行為

  //樣式3
  //初次宣染執行一次, 當totoal有改變後再執行一次
  useEffect(() => {
    console.log('初次render後執行一次這裡, 之後當total有改變"後"再執行一次')
  }, [total, name])
  console.log('render')
  return (
    <>
      <h1>useEffect基本四個樣式</h1>
    </>
  )
}
