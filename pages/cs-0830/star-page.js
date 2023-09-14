import { useState } from 'react'
// 是引入star資料夾, 也相當於引入star/index.js
import Star from '@/components/star'

export default function StarPage() {
  //此狀態是準備接, 使用者點了幾分
  const [value, setValue] = useState(3)
  const [value2, setValue2] = useState(6)
  return (
    <>
      {/* <button onClick={() => setValue(1)}>set value = 1</button>
      <button onClick={() => setValue(5)}>set value = 5</button> */}
      {/* 為什麼這裡不是使用starRating={starRating}  */}
      {/* 於star元件傳入屬性starRating, 並給它值3 */}
      {/* <Star starRating={3} /> 這行的功能： 是設定子元件const [rating, setRating] = useState(starRating)的初始值 */}
      {/* <Star starRating={value} /> VS. <Star starRating={3} />  */}

      {/* 在這裡, onClick會被當作是屬性(props.onClick), 而不是onclick點擊事件
      <Star starRating={value} onClick={setValue} /> */}

      {/* 評分改變時, 可以得到最後改變的評分並設定回去 */}
      <Star color="pink" starRating={value} onRatingChange={setValue} />
      <Star color="purple" starRating={value2} onRatingChange={setValue2} />
      <Star color="black" />
    </>
  )
}
