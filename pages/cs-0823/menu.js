//我們要狀態 引入React hook- useSate
import { useState } from 'react'

export default function Menu() {
  //宣告狀態, 在宣告狀態時要決定我們的狀態是什麼
  // 在這裡決定的狀態, 會影響之後程式的寫法
  // 直覺的做法, 我們要有狀態放上面的文字 --> 展開來說：點首頁按鈕它裡面會放'首頁'這個文字
  // const [itemText, setItemText] = useState('首頁') --> useState若一開始給空字串, 就不會有預設的active
  //以下是用文字當狀態, （在避免文字有重複的情況下）也可用索引值當狀態
  // 使用索引值當作狀態const [itemText, setItemText] = useState('-1'), -1表示一開始預設沒有選擇任何東西
  const [itemText, setItemText] = useState('首頁')

  const menuItems = ['首頁', '關於我們', '產品']
  return (
    <>
      <ul>
        {menuItems.map((v, i) => {
          return (
            <li
              // 可以用索引值當key的情況只有一種 --> 就是當它是『靜態資料』時 ！
              // 什麼是靜態資料, 就是當資料出現後, 不會做新增修改
              // 靜態資料例子: 月份下拉式選單
              key={i}
              className={itemText === v ? 'active' : ''}
              onClick={() => {
                setItemText(v)
              }}
              role="presentation"
            >
              <a>{v}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
