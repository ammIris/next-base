import { useState } from 'react'
// 導入.module.css檔案, 會得到styles這個『物件』
// 因styles是物件, 因此可用『物件存取屬性的方式』
// 有2種存取的方法
// 法一：className={style.on}  法二：className={style['on']} , 但有一種情況是只能用法二 --> 當css命名中含有『-』時, 需用方括號取值的方式
import styles from '@/styles/star.module.css'

export default function Star2() {
  // 創建狀態來記錄評分(0 ~ 5)
  const [rating, setRating] = useState(0)
  // 創建狀態, 來記錄hover時的評分
  const [hoverRating, setHoverRating] = useState(0)
  return (
    <>
      <h2>星星評分</h2>
      <div>
        {/* 創造一個長度為5的空陣列/將該陣列填滿值為1/使用map處理每個元素 */}
        {/* 填滿五顆星 */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            //每顆星星代表幾分
            const score = i + 1
            return (
              <button
                key={i}
                className={styles['star-btn']}
                onClick={() => {
                  // 按下星星就設定分數
                  setRating(score)
                }}
                onMouseEnter={() => {
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  setHoverRating(0)
                }}
              >
                <span
                  // rating, 是目前評分分數
                  // 分數(score)小於等於目前評分(rating)的星星圖,都要亮起
                  className={
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
                >
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
    </>
  )
}
