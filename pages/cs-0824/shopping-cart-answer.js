// 出自react文件官網範例: https://react.dev/learn/updating-arrays-in-state#challenges
import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 6,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 1,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  // 找到符合id的商品物件，把count屬性 +value
  // 專門用於更新狀態數量的純函式(相當於狀態更動共通3步驟的1和2步驟)
  //  id: 物品的唯一辨識碼  / value: 要增加/減少的數量值
  const updateCount = (products, id, value) => {
    return products.map((v) => {
      // * * *
      if (v.id === id) return { ...v, count: v.count + value }
      else return { ...v }
    })
  }

  // 找到符合id的商品物件，移除出狀態
  // 專門用於更新狀態數量的純函式(相當於狀態更動共通3步驟的1和2步驟)
  // remove 將返回一個新的陣列，其中已經刪除了具有指定ID的商品
  const remove = (products, id) => {
    return products.filter((v) => v.id !== id)
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {/* (<b>{product.count}</b>) --> 將商品數量設置為粗體 ex: (3) */}
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              setProducts(updateCount(products, product.id, 1))
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // 移除商品只有在-按鈕裡會發生
              // 臨界值信號: 目前是1，再按下-作移除
              if (product.count === 1) {
                setProducts(remove(products, product.id))
              } else {
                setProducts(updateCount(products, product.id, -1))
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
