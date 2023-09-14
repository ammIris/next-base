import React from 'react'
import IdForm from '@/components/refs-demo/id-form'
import RefsForm from '@/components/refs-demo/refs-form'

export default function RefsDemo() {
  return (
    <>
      <h1>refs範例</h1>
      <RefsForm />
      <RefsForm />
      <hr />
      <IdForm />
      <IdForm />
    </>
  )
}
