import React from 'react'
import Item from './item'

export default function List(todos, handleRemove, handleToggleCompleted) {
  return (
    <>
      <ul>
        {todos.map((v, i) => {
          // 為什麼需要再解構一次
          const { id, text, completed } = v
          return (
            <Item
              key={id}
              text={text}
              completed={completed}
              handleRemove={handleRemove}
              handleToggleCompleted={handleToggleCompleted}
            />
          )
          // 注意： map出來的資料, 若具有新增刪除修改, 其中一種時, 就不能使用索引值當作key值
          // 原因： 因若是資料刪除, 資料索引值會變
          // 解決辦法： 使用id
        })}
      </ul>
    </>
  )
}
