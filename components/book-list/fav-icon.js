import React from 'react'
import Image from 'next/image'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

// 也代表, fav是由父母元件傳入的
// Q: function FavIcon({ fav }) --> 使用『物件解構』, 將fav屬性的值解構出來作為函式的參數
// A: 表示從函式的參數中，取出名為 fav 的屬性。這樣做的好處是，可以在函式內部直接使用 fav 這個變數 !
// 這種寫法是『解構物件的屬性』作為函式參數
// 將父母元件的這些參數傳遞給FavIcon
// FavIcon(props) --> 底下要用props.fav
export default function FavIcon({ fav, isbn, handleToggleFav }) {
  return (
    <>
      <Image
        // v顯示紅色底線的原因: 其實是book的資料, 從books.map來的, 所以可以把v換成book 或者 fav應該要從項目book-item來
        src={fav ? bookmarkIconFill : bookmarkIcon}
        alt=""
        onClick={() => {
          // 第三步, 點按時會切換Fav的布林值
          // const newBooks = toggleFav(books, isbn)
          // setBooks(newBooks)

          //handleToggleFav 通常是在父元件中定義的，並傳遞給子元件作為屬性
          // 是在呼叫名為 handleToggleFav 的函式，同時將參數 isbn 傳遞給這個函式
          handleToggleFav(isbn)
        }}
      />
    </>
  )
}
