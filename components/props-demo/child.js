import React from 'react'
import PropTypes from 'prop-types'

//{ text, price, isNew, aa, oa } 相當於props !
export default function Child({ text = '我想念', price, isNew, aa, oa }) {
  return (
    <>
      {text} / {price}
    </>
  )
}

// 設定屬性的限制類型或是必填
Child.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}
