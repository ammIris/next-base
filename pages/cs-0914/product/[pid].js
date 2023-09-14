// 動態路由：路由名稱不固定 ex: /product/?id=1, 而這個1是不固定的, 因1指的是商品詳細頁
// ex: /product/catagory(starbucks)/cup/[pid], 這種動態的會用方括號命名(建議用一層)

//[pid]出來後要和伺服器相連, 因此需要useEffect
import { useEffect, useState } from 'react'
// 1. 導入useRouter
import { useRouter } from 'next/router'

// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products (商品詳細資料)
export default function Detail() {
  //Q: 如何於頁面上得到id
  // 此頁面至少render 3次(由於next的設定)
  // 2. 宣告router
  // router.usReady(布林值) - true代表本頁已完成水合作用 (第一次render已完成(可以開始進行第二次), 可以開始使用router屬性)
  // router.query(物件值)-其中會包含動態路由的參數pid
  const router = useRouter()
  //確保已完成水合作用, router屬性才會開始產生值
  useEffect(() => {
    if (router.isReady) {
      //這裡確保能得到 中的[pid]值
      console.log(router.query)
    }
  }, [router.isReady])
  return (
    <>
      <h1>詳細頁</h1>
    </>
  )
}
