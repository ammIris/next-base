import { useState } from 'react'

export default function Counter(props) {
  // 沒呼叫setTotal, React不會產生下一個新Total
  const [total, setTotal] = useState(0)
  // render, 等於照一張相片
  console.log('render')

  return (
    <div>
      <h1
        onClick={() => {
          // 還不是React的狀態 (14/15行)
          setTotal(total + 1)
        }}
        role="presentation"
      >
        {total}
      </h1>
    </div>
  )
}
