import React from 'react'
import PropTypes from 'prop-types'

// child元件是一個函式元件, 可以接收一個「物件」做為參數
// child(props), 其中的props --> 是把傳遞給child函式的『參數物件進行解構』
export default function Child({ text, price, isNew, fnHello, aa, oa }) {
  // if (typeof text !== 'string') {
  //   console.warn('text should be string type')
  // }

  return (
    <>
      {text}/ {price}
    </>
  )
}

// 設定屬性的限制類型或是必填
// propTypes, 可確保組件接收正確的屬性
Child.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
