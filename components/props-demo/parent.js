import React from 'react'
//導入child元件
import Child from './child'

// 若子女元件什麼都沒給, 會套用預設值
export default function Parent() {
  return (
    <>
      <Child
        text="汪台演唱會"
        price={100}
        isNew={false}
        aa={[1, 2, 3]}
        oa={{ a: 1, b: 5 }}
      />
      <hr />
      <Child />
    </>
  )
}
