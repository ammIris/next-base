import React from 'react'

// 看一夏老師寫的範例 縮減ver.
export default function JsxThree() {
  const aa = [100, 200, 300]
  // ab = [<li>100</li>, <li>200</li>, <li>300</li>]
  const ab = aa.map((v, i) => {
    return <li key={i}>{v}</li>
  })
  return (
    <>
      <ul>{ab}</ul>
    </>
  )
}
