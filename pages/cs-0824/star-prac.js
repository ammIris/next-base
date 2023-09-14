import { useState } from 'react'

// import的styles是物件
import styles from '@/styles/star.module.css'

export default function StarPrac() {
  // 創建狀態來記錄評分
  const [rating, setRating] = useState(0)

  // 狀態, 紀錄Hover時的評分
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <>
      <h1>星星評分</h1>
      <div>
        {Array(5)
          // 這裡重要的是索引值, ???? 這裡加不加fill(1), 是否有差, 只會造成陣列中的元素初始化為undefined
          .fill(1)
          .map((v, i) => {
            const score = i + 1
            return (
              <button
                key={i}
                className={styles['star-btn']}
                onClick={() => {
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
