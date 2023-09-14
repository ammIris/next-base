// http://localhost:3000/cs-0914/product/list, 在網址list後加的東西都會被算在『商品詳細頁』

import { useEffect, useState } from 'react'

import Link from 'next/link'

// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products
export default function List() {
  // [
  //    ]

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    //最好不要用一般的fetch, 因有許多需要自己設定的參數(若要實行複雜的東西), 若要與server相連就要有標頭/
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
    )

    const data = await res.json()

    console.log(data)
    setProducts(data)
  }

  useEffect(() => {
    //和伺服器要資料,再設定到produucts
    getProducts()
  }, [])
  return (
    <>
      <h1>商品列表頁</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link href={`/cs-0914/product/${v.id}`}>{v.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
