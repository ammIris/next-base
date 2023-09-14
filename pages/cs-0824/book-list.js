import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

function BookList() {
  // 闊充每個書的物件, 多一個fav屬性(布林值, 預設為false)
  // map(),展開陣列,把每個物件展開後加上fav屬性, 若物件中本來就有該屬性,就會做覆蓋 / 若無該屬性則會新增該屬性

  // v, 會依序取得data中的元素
  // 若data中有a, b, c --> 當v取得a時, 會執行return { ...v, fav: false }, 取得b時會再執行...
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
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                    onClick={() => {
                      // 第三步, 點按時會切換Fav的布林值
                      const newBooks = toggleFav(books, v.isbn)
                      setBooks(newBooks)
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
