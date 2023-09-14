import { useState, useContext, createContext } from 'react'

// creat context
export const AuthContext = createContext(null)

//建立提供給全站套用的(_app.js)元件
export function AuthProvider({ children }) {
  // 創建『狀態』
  // 狀態若為物件的話, 最好把屬性的初始值寫出來, 要把物件裡有什麼屬性寫出來
  const [auth, setAuth] = useState({
    // 使用物件的寫法, 物件中有2個屬性
    isAuth: false, // 現在的狀態是否有登入
    userData: {
      // 代表會員資料
      id: 0,
      name: '',
      username: '',
    },
  })
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

// 給consumer使用的勾子 need to set another hook for consumer? why ?
export const useAuth = () => useContext(AuthContext)
