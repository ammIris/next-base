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

          // 步驟123可以合成：setData([newObj, ...data])
          //example1:無法按2次, console.log會出現錯誤訊息, 因ID重複
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

          // 將步驟123合併：setData([...data, newObj])
        }}
      >
        2.列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 解決ID重複的問題, 有4種做法
          //1.uuid/nanoid 函式庫或內建的產生uuid碼
          // const newId = self.crypto.randomUUID()

          //2. 時間日期物件轉為毫秒值(整數) 千分之一秒
          // 這個做法會有的問題 ：不適合再多人聊天室使用, 因若人多可能有人在同時間按下, 會導致id相同
          // + : 一元陣號, 將值強制轉成數值
          // const newId = +new Date() // + new Date()等於 Number(new Date())
          // const newId = Date.now()

          // 3.一般的隨機字串
          // 4. 仿造資料庫遞增id的做法(只限於全部ID是數字遞增的情況)把所有id全部集中起來變一個陣列, 找到陣列裡面的最大值,取最大的數加一 (...沒使用闊展運算子開展之前,無法看到裡面的值 )
          //只有第四種方法才是純函式
          //ids --> 是把是把目前data的id值抽取出來變成陣列
          const ids = data.map((v) => {
            v.id
          })
          const newId = Math.max(...ids) + 1

          const newObj = { id: newId, text: '汪台' }

          const newData = [newObj, ...data]
          setData(newData)
        }}
      >
        3.列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button onClick={() => {}}>
        4.列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 這裡的v, 表示objArray中陣列裡的物件
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
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 在陣列中刪除文字為B的物件 = 回傳一個新陣列, 裡面沒有文字B的物件
          const newData = data.filter((v) => v.text !== 'b')

          // 3. 設定回原本的狀態中
          setData(newData)
        }}
      >
        6.刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 在陣列中刪除id為4的物件 = 回傳一個新陣列, 裡面沒有id為4的物件
          // 我的新的『狀態陣列』不可以有id為4的物件
          const newData = data.filter((v) => v.id !== 4)

          // 3. 設定回原本的狀態中
          setData(newData)
        }}
      >
        7.刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // step1: 尋找ID=2的索引位置在哪
          const foundIndex = data.findIndex((v) => {
            v.id === 2
          })
          //(判斷ID=2是否存在) 如果有找到索引值 (可以這樣寫判斷式)
          if (foundIndex > -1) {
            //建立要插入的物件
            const newObj = { id: 5, text: '汪蘇瀧' }
            //分割(產生子陣列)
            //array.slice(開始索引, 結束索引) **並不包含結束索引值
            const aa = data.slice(0, foundIndex + 1)
            const ab = data.slice(foundIndex + 1)

            //插入新物件, 合併原陣列
            const newData = [...aa, newObj, ...ab]

            //3.設定回原狀態
            setData(newData)
          }
        }}
      >
        8在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />

      <button
        onClick={() => {
          // step1: 尋找ID=2的索引位置在哪
          const foundIndex = data.findIndex((v) => {
            v.id === 2
          })
          //(判斷ID=2是否存在) 如果有找到索引值 (可以這樣寫判斷式)
          if (foundIndex !== -1) {
            //建立要插入的新物件
            const newObj = { id: 5, text: '汪蘇瀧' }

            //1.拷貝原狀態 拷貝2階層的語法
            // 若return (v), 會只有拷貝到一層。 return{...v}, 才會拷貝到第二層, 等於是展開裡面的物件值
            const newData = data.map((v) => {
              return { ...v }
            })

            //終極拷貝法, 多身都拷的到
            // const newData = JSON.parse(JSON.stringify(data))

            //2.會使用newData原因：需用拷貝後的新陣列, 來插入新物件 (使用splice)
            // 語法規則：需在完全拷貝出來的物件值上才能做修改
            // splice(),會修改原陣列
            // why foundIndex需加一 --> 因想再foundIndex的後面插入物件
            newData.splice(foundIndex + 1, 0, newObj)

            //3.設定回原狀態
            setData(newData)
          }
        }}
      >
        8-1.在id為2後面插入id為5與文字為bbb的物件(splice)
      </button>
      <br />

      <button
        onClick={() => {
          // 1.2.拷貝原狀態, 拷貝2階層的語法 & 修改
          // 只能在『物件陣列中使用』且only拷貝到第2階層而已 ！！
          const newData = data.map((v) => {
            //if (v.id === 3) return { ...v, 這裡...v指的是『拷貝』id:3, text:c
            if (v.id === 3) return { ...v, text: 'cccc' }
            else return { ...v }

            // 1.2.拷貝原狀態, 拷貝2階層的語法 & 修改 ---- 使用三元運算子
            // return v.id === 3 ? {...v, text:'cccc'} : {...v}
            //簡寫版三元運算子： const newData = data.map((v)=> v.id === 3 ? {...v, text:'cccc'} : {...v})
          })

          //3.設定回原狀態
          setData(newData)
        }}
      >
        9.取代id為3的文字為cccc 常用！
      </button>
    </>
  )
}
