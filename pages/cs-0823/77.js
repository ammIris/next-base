import { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 與呈現有關必需先成為state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        1.列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        2.列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 1. uuid/nanoid 函式庫或內建的產生uuid碼
          //const newId = self.crypto.randomUUID()
          // 2. 時間日期物件轉為毫秒值(整數)
          //const newId = +new Date() //Number(new Date())
          //const newId = Date.now()
          // 3. 一般的隨機字串
          // 4. 仿照資料庫遞增id的作法(只限於全部ID是數字遞增情況)
          const ids = data.map((v) => v.id)
          const newId = Math.max(...ids) + 1

          // 先寫出要新增的物件值
          const newObj = { id: newId, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        3.列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // id用時間日期物件轉為毫秒值(整數)
          const newObj = { id: Date.now(), text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        4.列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          const newData = data.filter((v) => v.text.includes('a'))

          // 3. 設定回原本的狀態中
          setData(newData)
        }}
      >
        5.尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 2
          // 在陣列中刪除文字為b的物件 = 回傳一個新陣列，裡面沒有文字為b的物件
          const newData = data.filter((v) => v.text !== 'b')

          // 3.
          setData(newData)
        }}
      >
        6.刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 2
          // 在陣列中刪除id為4的物件 = 回傳一個新陣列，裡面沒有id為4的物件
          const newData = data.filter((v) => v.id !== 4)

          // 3.
          setData(newData)
        }}
      >
        7.刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 尋找id=2的索引為何
          const foundIndex = data.findIndex((v) => v.id === 2)

          // 如果有找到
          if (foundIndex !== -1) {
            // 建立要插入的新物件
            const newObj = { id: 5, text: 'bbb' }

            // 分割(產生子陣列)
            // array.slice(開始索引, 結束索引)
            const aa = data.slice(0, foundIndex + 1)
            const ab = data.slice(foundIndex + 1)

            // 插入新物件，合併原陣列
            const newData = [...aa, newObj, ...ab]

            // 3. 設定回原狀態
            setData(newData)
          }
        }}
      >
        8.在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 尋找id=2的索引為何
          const foundIndex = data.findIndex((v) => v.id === 2)

          // 如果有找到
          if (foundIndex !== -1) {
            // 建立要插入的新物件
            const newObj = { id: 5, text: 'bbb' }

            // 1. 拷貝原狀態 拷貝2階層的語法
            const newData = data.map((v) => {
              return { ...v }
            })
            //const newData = JSON.parse(JSON.stringify(data))

            // 2.後面插入新物件
            newData.splice(foundIndex + 1, 0, newObj)

            // 3. 設定回原狀態
            setData(newData)
          }
        }}
      >
        8-1.在id為2後面插入id為5與文字為bbb的物件(splice)
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 2. 拷貝原狀態 拷貝2階層的語法
          const newData = data.map((v) => {
            if (v.id === 3) return { ...v, text: 'cccc' }
            return { ...v }
          })

          // 3. 設定回原狀態
          setData(newData)
        }}
      >
        ⭐9.取代id為3的文字為cccc
      </button>
    </>
  )
}
