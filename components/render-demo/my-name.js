import { useState } from 'react'

export default function MyName() {
  const [name, setName] = useState('')
  const [force, setForce] = useState(false)
  return (
    <>
      <h1>myName</h1>
      <p>{name}</p>
      <button
        onClick={() => {
          return setName('Silence')
        }}
      >
        setName to Silencee
      </button>

      <button onClick={() => setName('troye')}>setName to troye</button>

      <button onClick={() => setForce(!force)}>強制render</button>
      {/* 會是強制render, 是因狀態有改變, 就一定會render, 但畫面並無改變 */}
      {/* Browser paint screen 由瀏覽器定是否要重畫 */}
      {/* render和是否顯示畫面無關, render可以重新渲染畫面但不改變畫面 */}
    </>
  )
}
