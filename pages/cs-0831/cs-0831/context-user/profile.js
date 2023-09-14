//會員資料頁面
import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function Profile() {
  const { auth, setAuth } = useAuth()
  return (
    <>
      <h1>會員資料頁面</h1>
      <p>姓名：{auth.userData.name}</p>
      <Link href="/cs-0831/cs-0831/context-user/login">會員登入頁</Link>
    </>
  )
}
