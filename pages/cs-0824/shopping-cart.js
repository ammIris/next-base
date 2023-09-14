import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  // product是狀態變數
  const [products, setProducts] = useState(initialProducts)

  // updatecount, 給我狀態, 看現在加一減一
  // 找到符合id的商品物件, 在把count屬性 + 1
  // 純函式, 專門用於更新數量
  //這裡的products會是那個陣列 value是等等需要用它來做加減(這些值都是下面要用到的)
  // 找到符合id的商品物件，把count屬性 +value
  // 專門用於更新狀態數量的純函式(相當於狀態更動共通3步驟的1和2步驟)
  const updateCount = (products, id, value) => {
    return products.map((v) => {
      if (v.id === id) return { ...v, count: v.count + value }
      else return { ...v }
    })
  }

  // 找到符合id的商品物件, 移除出狀態
  // 以下函式只做狀態的更動
  const remove = (products, id) => {
    return products.filter((v) => {
      v.id !== id
    })
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
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
              // 若要移除商品只有在減號按鈕按下時會發生
              // 臨界值信號：目前是1, 在按下減號按鈕, 會變為0, 變為0時要移除狀態
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
