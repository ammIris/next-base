import Link from 'next/link'
// import { useContext } from 'react'
// import { ThemeContext } from '@/context/theme-context'
import { useTheme } from '@/hooks/use-theme'

export default function Page2() {
  //這個不是page2的狀態, 是來自_app,js 以下程式的狀態--> const [color, setColor] = useState('dark')
  const { color, setColor } = useTheme()
  return (
    <>
      <h1>Page2</h1>
      {/* color的來源是provider */}
      {/* style={{ color: color }}, 是JSX語法所以要用雙括號來刮JavaScript表達式 / {{ color: color }} 是一個物件，它的屬性名 color 對應到 CSS 屬性名 color，並且這個屬性的值 color 是從 useContext(ThemeContext) 中讀取的 color 狀態值 */}
      <p style={{ color: color }}>我是測試文字</p>
      {/* <a href="/cs-0830/context-demo/page1">連結到Page1</a>
      <br /> */}
      {/* 用Link元件取代a連結，可以保持住狀態/Context */}
      <Link href="/cs-0830/context-demo/page1">連結到Page1</Link>
    </>
  )
}
