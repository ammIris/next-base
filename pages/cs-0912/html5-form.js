import { useState } from 'react'

export default function Html5Form() {
  const [inputText, setInputText] = useState('')

  const [textareaText, setTextareaText] = useState('')
  //呈現密碼用
  const [show, setShow] = useState(false)

  // radio group
  const foodOptions = ['三明治', '貝果', '巧克力']

  // 紀錄使用者選了什麼
  // 以下狀態只能有四種情況值：'三明治'| '貝果' | '巧克力' | ''
  const [food, setFood] = useState('三明治')

  //城市下拉式選單
  const cityOptions = ['台中市', '新竹市', '花蓮市']
  // 使用者選了哪個值
  const [city, setCity] = useState('')
  return (
    <>
      <h1>可控表單元件</h1>
      <section id="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />

        <h2>密碼呈現隱藏(input-password)</h2>
        <input
          type={show ? 'text' : 'password'}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          呈現
        </button>
      </section>
      <section id="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <input
          type="text"
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>
      {/* checked --> 使否被選中, 使用布林值來對應
      onChange --> 來看更新 */}
      <section id="radio-group">
        <h2>選項按鈕群組(radio-group)</h2>
      </section>
      <section>
        <h2>下拉清單(select)</h2>
        <select
          //   value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          <option value="">請選擇程式</option>
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
