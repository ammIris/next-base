import { useState } from 'react'
import Image from 'next/image'

import data from '@/data/books.json'

import bookmarkIconFill from '@/assets/bookmark-fill.svg'
import bookmarkIcon from '@/assets/bookmark.svg'

function BookList() {
  // step1. 擴充每個物件, 要多出fav屬性
  const initState = data.map((v) => {
    return { ...v, fav: false }
  })

  // 宣告初始化狀態
  const [books, setBooks] = useState(initState)

  // toggleFav --> 用來改變狀態
  // ??????? books vs. v
  const toggleFav = (books, isbn) => {
    return books.map((v) => {
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      else return { ...v }
    })
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
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    // Image --> 是使用Next.js的的Image元件
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                    onCLick={() => {
                      setBooks(toggleFav(books, v.isbn))
                    }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default BookList
