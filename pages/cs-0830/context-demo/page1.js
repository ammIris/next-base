import Link from 'next/link'
// import { useContext } from 'react'
// import { ThemeContext } from '@/context/theme-context'
import { useTheme } from '@/hooks/use-theme'
import List from '@/components/page1/list'

export default function Page1() {
  //useContext為什麼括弧不能加''& 為什麼前面是用花括弧
  //這個不是page1的狀態
  // 使用 useContext 鉤子來從指定的 Context 中取得狀態
  // 使用Context機制從指定的context中讀取狀態值
  // useContext(ThemeContext), 接收一個Context物件作為參數
  // Q: 為什麼const { color, setColor }, 是用花括號而不是[]?
  // A: 因使用createContext創建Context時, 得到的會是『contetx object』
  // 解釋from chatGPT: 使用 useContext 鉤子來讀取 ThemeContext 中提供的值。
  // 解釋from chatGPT:從 useContext 的結果物件中解構出 color 和 setColor 這兩個屬性，這樣你可以在, 當前的組件中直接使用 color 和 setColor 來訪問和更新該 Context 提供的狀態值。
  const { color, setColor } = useTheme()
  return (
    <>
      <h1>Page1</h1>

      <p>color:{color}</p>
      <button
        onClick={() => {
          // color的來源是provider
          setColor('red')
        }}
      >
        red
      </button>
      <button
        onClick={() => {
          setColor('green')
        }}
      >
        green
      </button>
      {/* <a href="/cs-0830/context-demo/page2">連結到Page2</a>
      <br /> */}
      <List />
      <br />
      {/* 使用link元件取代<a>連結, 可以保持著狀態 */}
      <Link href="/cs-0830/context-demo/page2">連結到Page2</Link>
    </>
  )
}
