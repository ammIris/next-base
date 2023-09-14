import '@/styles/book-list.css'
//於_app.js引入context
// import { ThemeContext } from '@/context/theme-context'
// import { useState } from 'react'
import { ThemeProvider } from '@/hooks/use-theme'
import { AuthProvider } from '@/hooks/use-auth'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  //於_app.js設定了狀態 設定狀態的目的？是啥子
  // 會關聯太多檔案
  // const [color, setColor] = useState('dark')

  return (
    // ThemeContext.Provider, 是用來規範資料分享範圍, 讓整個站app都可以用到
    // 傳的時候給了屬性, 且屬性一般用預設值
    // 『提供者』把狀態, value={{ color, setColor }}, 往所有下面元件傳(所有頁面及頁面元件), 所以有頁面及頁面元件都讀得到這個狀態
    // 把AuthProvider夾到ThemeProvider裡面 (context hell由來)
    <AuthProvider>
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </AuthProvider>
  )
}
