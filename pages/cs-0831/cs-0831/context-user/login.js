// 登入頁面
import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function Login() {
  const { auth, setAuth } = useAuth()
  return (
    <>
      <h1>會員登入頁</h1>
      <button
        onClick={() => {
          setAuth({
            isAuth: true,
            userData: {
              id: 1,
              name: 'Slience',
              username: 'Wang',
            },
          })
        }}
      >
        登入
      </button>
      <button
        onClick={() => {
          setAuth({
            isAuth: false,
            userData: {
              id: 0,
              name: '',
              username: '',
            },
          })
        }}
      >
        登出
      </button>
      <Link href="/cs-0831/cs-0831/context-user/profile">會員資料頁面</Link>
    </>
  )
}
