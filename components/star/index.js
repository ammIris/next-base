// star-page是index.js的父母元件
import { useState, useEffect } from 'react'
// 導入.module.css檔案
// 下面程式中可用`styles.on`或`styles["on"]`套入css類別
import styles from './star.module.css'

// export default function Star({starRating = 0}), 傳入的值多少, 初始值就是多少(是從父母元件傳入)
// export default function Star({ starRating = 0 }) --> 只是給他參數＆預設值
// 像這種要傳入的參數, 最好給它預設值 ！ onRatingChange的預設值給它空的箭頭函式
export default function Star({
  starRating = 0,
  onRatingChange = () => {},
  color = 'orange',
}) {
  // 記錄評分(0~5)
  // const [rating, setRating] = useState(starRating) --> 才會是接收來自『star-page』傳入的屬性及值
  // anti-pattern(反樣式): 以props(屬性)作為tate(狀態)的初始化值, 或稱為derived state(衍生的狀態)
  // 因此rating & starRating, 在初始值化完關係就結束了
  //這裡的const [rating, setRating] = useState(starRating)可以改成const [rating, setRating] = useState(0)
  const [rating, setRating] = useState(starRating)
  // 記錄hover時的評分(0~5)
  const [hoverRating, setHoverRating] = useState(0)

  // 解決上面的反樣式（解法一)
  // 如果要保持和starRating連動, 需要用useEffect監聽starRating變動, 再設定到Rating中
  // useEffect語法 ---> useEffect(()=>{}, [])其中陣列為：相依性陣列, 在監聽,當starRating改變時, 會做一次setRating
  // 只要監聽到有改變, 就會做事
  useEffect(() => {
    setRating(starRating)
  }, [starRating])
  return (
    <>
      <div>
        {/* `Array(5).fill(1)`可以快速產生5個成員，值都是1的陣列 */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            //每個星星的分數
            const score = i + 1

            return (
              <button
                key={i}
                className={styles['star-btn']}
                onClick={() => {
                  setRating(score)
                  // 回傳到父母元件用
                  onRatingChange(score)
                }}
                onMouseEnter={() => {
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  setHoverRating(0)
                }}
              >
                <span
                  // 分數(score)小於等於目前的評分(rating)的星星圖都要亮起
                  //這是什麼寫法 ？？？
                  className={
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
                  style={{
                    color:
                      score <= rating || score <= hoverRating ? color : 'gray',
                  }}
                >
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
      <style jsx>{`
        .on {
          color: ${color};
        }

        .off {
          color: gray;
        }

        .star-btn {
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
