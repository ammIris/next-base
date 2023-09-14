import { useState } from 'react'
// css module, 為了讓每個React元件, 不會互相衝突, 因此css module會將屬性值尾巴多加雜湊(hash)！
// import styles,styles其實變成了物件
// 導入.module.css檔案
import styles from '@/styles/star.module.css'

export default function Star() {
  //記錄評分0-5 預設為0
  const [rating, setRating] = useState(0)
  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {/* 星星的分數, 剛好是索引值+ 1 */}

        {Array(5)
          .fill(1)
          .map((v, i) => {
            {
              /* 每個星星的分數 */
            }
            const score = i + 1
            return (
              <button
                key={i}
                className={styles['star-btn']}
                onClick={() => {
                  setRating(score)
                }}
              >
                <span
                // 分數小於等於目前的評分的星星圖都要亮起
                ></span>
              </button>
            )
          })}
        {/* styles是物件, 所以styles.on, 是取物件中的屬性 */}
        {/* 但不能寫styles.good-style 格式會錯  */}
        <span className={styles['on']}>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
      </div>
    </>
  )
}
