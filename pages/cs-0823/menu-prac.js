import React from 'react'
import { useState } from 'react'

export default function MenuPrac() {
  const [itemText, setItemText] = useState('首頁')
  const menuItem = ['首頁', '650電台', '50里桃花塢']
  return (
    <>
      <ul>
        {menuItem.map((v, i) => {
          return (
            <li
              key={i}
              className={itemText === v ? 'active' : ''}
              onClick={() => {
                setItemText(v)
              }}
              role="presentation"
            >
              <a>{v}</a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
