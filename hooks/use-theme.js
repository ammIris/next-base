// use-theme.js --> 把宣告createContext & 合在一起
import { createContext, useContext, useState } from 'react'

// 這裡不需要使用export, why? why? why?
// 宣告要使用的context
export const ThemeContext = createContext(null)

//接著在這裡寫元件, 寫的會是『提供者角色的元件』, 準備取代_app.js中的 --> ThemeContext.Provider
// Q: {children}是什麼？ 在react component中，我們把包在標籤中間的東西，稱為children
// 補充：children 是props之一 / 版型用好後把資料塞進去也是用children
//補充： 夾在ThemeProvider中間的會稱作『plus children』 ThemeProvider這種元件, 需要上下夾起來(指需要前後結尾)才能用, 而中間要放什麼, 不確定
// 協助全站(_app.js)裡用的套用Provider的元件，集中要使用的狀態

// 把原本寫在_app.js的狀態放到這
// 把狀態放到這hook裡面管, （勾子可以放狀態）
export function ThemeProvider({ children }) {
  const [color, setColor] = useState('dark')
  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

// 協助導入contetx用的(消費者consumer)的鉤子
// 利用useContext去獲取ThemeContext的的東西
// 要用箭頭函式是因為, useContext是個函式 (use勾子, 都是函式)
// 給消費者consumer使用的勾子
export const useTheme = () => useContext(ThemeContext)
