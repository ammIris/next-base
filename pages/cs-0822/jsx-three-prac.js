import React from 'react'

export default function JsxThreePrac() {
  const aa = ['fix you', 'yellow', 'MyUniverse']
  const ab = aa.map((v, i) => {
    return <li key={i}>{v}</li>
  })
  return (
    <>
      <ul>{ab}</ul>
    </>
  )
}
