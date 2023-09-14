import { useState } from 'react'
// BookList是Book-item的父母元件
import BookItem from './book-item'
// 範例資料
import data from '@/data/books.json'
export default function BookList() {
  const initState = data.map((v) => {
    return { ...v, fav: false }
  })

  // 宣告初始化狀態
  const [books, setBooks] = useState(initState)

  // 修改狀態的1/2步驟
  // toggleFav只用來改變狀態
  // 純函式：改變fav的布林值(true->false / false->true) （要改到陣列裡的物件, 所以是第二層）
  const toggleFav = (books, isbn) => {
    return books.map((v) => {
      // 如果與目前傳入的isbn相符合, 切換fav的布林值
      // return {...v}會是回傳新陣列, 差異在於若isbn碼有對應到, fav會改變
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      else return { ...v }
    })
  }

  // 給isbn就處理以下事情
  const handleToggleFav = (isbn) => {
    setBooks(toggleFav(books, isbn))
  }
  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            const { isbn, title, author, fav } = v
            // key一定是加在map裡面 ＆ 離return最近
            return (
              <BookItem
                key={v.isbn}
                isbn={isbn}
                title={title}
                author={author}
                fav={fav}
                handleToggleFav={handleToggleFav}
              />
            )
          })}
        </tbody>
      </table>
    </>
  )
}
