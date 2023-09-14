import { useState } from 'react'

export default function Html5Form2() {
  //input text 狀態
  const [inputText, setInputText] = useState('')

  //textarea 狀態
  const [textareaText, setTextareaText] = useState('')

  // 控制密碼是否顯示 狀態
  const [show, setShow] = useState(false)

  // radio group
  //選項會是陣列, 是為了之後要用map的方式呈現
  const foodOptions = ['酸麵包', '可頌', '肉桂捲']
  // 紀錄使用者選了什麼
  //這種狀態會有4種情況值：'' | '酸麵包'| '可頌'| '肉桂捲'
  const [food, setFood] = useState('')

  //select
  const cityOptions = ['台中市', '台北市', '新竹市']
  //一樣city, 只會有4種狀態值：'' | '台中市'| '台北市'| '新竹市'
  const [city, setCity] = useState('')

  return (
    <>
      <h1>可控表單元件</h1>
      <section id="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          // 由我們主動監聽onChange來改變value, 然後再顯示回畫面
          // 用onChange事件, 來將資料狀態更新回state
          // onChange: 當輸入框的值發生變化時觸發
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />

        <h2>顯示隱藏的密碼(input-password)</h2>
        <input
          // showy在true的情況下type = 'text'  ----> 在切換密碼是否呈現時, 要用什麼類型(type)
          type={show ? 'text' : 'password'}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        {/* <button
          onClick={() => {
            setShow(!show)
          }}
        >
          show於true的情況下要隱藏這個button
          {show ? '隱藏' : '顯示密碼'}
        </button> */}

        <label>
          <input
            type="checkbox"
            checked={show}
            onChange={(e) => {
              setShow(e.target.checked)
            }}
          />
          顯示密碼
        </label>
      </section>

      <section id="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          type="text"
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>

      <section id="radio-group">
        <h2>選項按鈕群組(radio-group)</h2>
        {/* 把選項map出來 */}
        {foodOptions.map((v, i) => {
          return (
            <label key={i}>
              {/* food和每個map中的v值, 做比較 */}
              <input
                type="radio"
                // food 狀態的值等於當前選項 v 的值，則該選項應該被選中。這是為了確保在渲染表單時，正確地反映出當前的選擇狀態。
                //重點在於是否被選中
                //老師筆記： 用目前選中的food狀態來比較，決定是否呈現選中的樣子
                checked={food === v}
                // value指的是當前選中的食物選項的值
                value={v}
                onChange={(e) => {
                  // 老師筆記：狀態中記錄的是每個選項被選中的值
                  setFood(e.target.value)
                }}
              />
              {v}
            </label>
          )
        })}
      </section>

      <section id="select">
        <h2>下拉式清單(select)</h2>
        <select
          value={city}
          onChange={(e) => {
            return e.target.value
          }}
        >
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
        </select>
      </section>
    </>
  )
}
