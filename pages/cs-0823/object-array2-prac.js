import { useState } from 'react'
const objArray = [
  {
    id: 1,
    text: 'fix youaaaa',
  },
  {
    id: 2,
    text: 'yellowbbbb',
  },
  {
    id: 3,
    text: 'myuniverse',
  },
  {
    id: 4,
    text: 'heyheyyou',
  },
]

export default function ObjectArray2Prac() {
  const [data, setData] = useState(objArray)
  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="2">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={i}>
                <th>{v.id}</th>
                <th>{v.text}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>

      <button
        onClick={() => {
          const newObj = { id: 99, text: '汪蘇瀧' }

          const newData = [newObj, ...data]

          setData(newData)
        }}
      >
        1.列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <hr />
      <button
        onClick={() => {
          const newObj = { id: '650', text: '攝政王' }
          setData([...data, newObj])
        }}
      >
        2.列表最後面，新增一個物件值id為汪蘇瀧與文字為攝政王的物件
      </button>
      <hr />
      <button
        onClick={() => {
          // ????????為什麼這裡的箭頭函式不能加{}, id會顯示NaN
          const ids = data.map((v) => v.id)
          const newId = Math.max(...ids) + 1
          const newObj = { id: newId, text: '有點甜' }
          const newData = [newObj, ...data]
          setData(newData)
        }}
      >
        3.列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <hr />
      <button
        onClick={() => {
          const newObj = { id: Date.now(), text: 'somebody' }
          const newData = [...data, newObj]
          setData(newData)
        }}
      >
        4.列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <hr />
      <button
        onClick={() => {
          const newData = data.filter((v) => v.text.includes('a'))
          setData(newData)
        }}
      >
        5.尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <hr />
      <button
        onClick={() => {
          const newData = data.filter((v) => v.text !== 'b')
          setData(newData)
        }}
      >
        6.刪除文字為b的物件資料 why why why why 出不來
      </button>
      <hr />
      <button
        onClick={() => {
          const newData = data.filter((v) => v.id !== 4)
          setData(newData)
        }}
      >
        7.刪除id為4的物件資料
      </button>
      <hr />
      <button
        onClick={() => {
          // why why why why 不能用()=>{} 因為加{}要在加return才是一組
          const foundIndex = data.findIndex((v) => {
            return v.id === 2
          })

          if (foundIndex !== -1) {
            const newObj = { id: 5, text: 'bbb' }

            const aa = data.slice(0, foundIndex + 1)
            const bb = data.slice(foundIndex + 1)
            setData([...aa, newObj, ...bb])
          }
        }}
      >
        {' '}
        8.在id為2後面插入id為5與文字為bbb的物件
      </button>
      <hr />
      <button
        onClick={() => {
          const foundIndex = data.findIndex((v) => v.id === 2)
          if (foundIndex !== -1) {
            const newObj = { id: 5, text: 'bbb' }
            const newData = data.map((v) => {
              return { ...v }
            })

            newData.splice(foundIndex + 1, 0, newObj)
            setData(newData)
          }
        }}
      >
        8-2.在id為2後面插入id為5與文字為bbb的物件(splice)
      </button>
      <hr />
      <button
        onClick={() => {
          const newData = data.map((v) => {
            if (v.id === 3) return { ...v, text: 'ccc' }
            else return { ...v }
          })
          setData(newData)
        }}
      >
        ⭐9.取代id為3的文字為cccc
      </button>
    </>
  )
}
