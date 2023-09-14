// props-demo是頁面元件
import React from 'react'
//於component/props-demo導入parent元件
import Parent from '@/components/props-demo/parent'

// 所以其實PropsDemo算是Parent元件的上層元件, 因為它render了Parent元件
export default function PropsDemo() {
  return (
    <>
      <Parent />
    </>
  )
}
