import { useState } from 'react'

export default function AddForm({ handleAdd }) {
  // 設定狀態給文字輸入框使用
  const [inputText, setInputText] = useState('')

  // 用於開關中文輸入法的信號狀態
  // 為了避免組字時不要進狀態
  // flase, 關起來代表輸入完成  / true, 打開代表正在輸入
  const [isCompositing, setIsCompositing] = useState(false)

  return (
    <>
      <input
        type="text"
        value={inputText}
        // onChange很敏感, 只要一點變化就會捕捉到(像是：輸入無蝦米, 在輸入過程中就會直接顯示拼字於頁面上)
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        //是React中內建的『組字』事件
        // React docs specifies three "composition events --> onCompositionEnd onCompositionStart onCompositionUpdate
        onCompositionStart={() => setIsCompositing(true)}
        onCompositionEnd={() => setIsCompositing(false)}
        onKeyDown={(e) => {
          // 修正入法組字時用Enter鍵送字的bug
          // 如果不是在入當中, 才會讓他進入狀態
          if (e.key === 'Enter' && !isCompositing) {
            //按下Enter鍵時, 加入到待辦事項(也就是todos狀態), 也就是也就是todos陣列的最上面
            handleAdd(e.target.value)

            // 按下enter後, 清空輸入框
            setInputText('')
          }
        }}
      />
    </>
  )
}
