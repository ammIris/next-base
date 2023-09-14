import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: 'Fix u',
    count: 6,
  },
  {
    id: 1,
    name: 'A Sky full of stars',
    count: 5,
  },
  {
    id: 2,
    name: 'yellow',
    count: 1,
  },
]
export default function ShoppingCartPrac() {
  const [products, setProducts] = useState(initialProducts)

  const updateCount = (products, id, value) => {
    return products.map((v) => {
      if (v.id === id)
        return {
          ...v,
          count: v.count + value,
        }
      else return { ...v }
    })
  }

  const remove = (products, id) => {
    return products.filter((v) => v.id !== id)
  }

  return (
    <ul>
      {products.map((v) => {
        ;<li key={v.id}>
          {v.name}(<b>{v.count}</b>)
          <button
            onClick={() => {
              setProducts(updateCount(products, v.id, 1))
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (v.count === 1) {
                setProducts(remove(products, v.id))
              } else {
                setProducts(updateCount(products, v.id, -1))
              }
            }}
          >
            -
          </button>
        </li>
      })}
    </ul>
  )
}
