import { useState } from 'react'

export default function TodoIndex() {
  // 設定狀態給文字輸入框使用
  const [inputText, setInputText] = useState('')

  // 用於開關中文輸入法的信號狀態
  // 為了避免組字時不要進狀態
  // flase, 關起來代表輸入完成  / true, 打開代表正在輸入
  const [isCompositing, setIsCompositing] = useState(false)

  // useState所帶的參數為這個 state 的初始值，而一個component中可以有不只一個state。
  // 為什麼useState的初始值, 會是物件陣列
  // 陣列：每個成員={id:number, text:string, completed: boolean}
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '明天吃about H',
      completed: true,
    },
    {
      id: 2,
      text: '抹茶千層',
      completed: false,
    },
  ])

  // ------------以下是法二 ！！！--------使用onChange來改變點擊Completed後的boolean值
  // 修改狀態的1/2步驟
  // toggleFav只用來改變狀態
  // 純函式：改變completed的布林值(true->false / false->true) （要改到陣列裡的物件, 所以是第二層）
  const toggleCompleted = (todos, id) => {
    return todos.map((v) => {
      //       // 如果與目前傳入的id相符合, 切換completed的布林值
      //       // return {...v}會是回傳新陣列, 差異在於若isbn碼有對應到, fav會改變
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }

  //-----關於刪除------
  // 修改狀態的1/2步驟
  // 純函式：比對到v.id等於id, 就做移除
  // 使用remove, 因為delete算是javaScript2的關鍵字
  // 返回的新陣列是返回的新陣列是那些id不等於要刪除id的的待辦事項
  const remove = (todos, id) => {
    return todos.filter((v) => v.id !== id)
  }

  // 刪除的第3步驟
  // 設定刪除的處理函式
  // id代表要刪除的待辦事項的id
  //remove(todos, id), 呼叫了之前定義的remove函式並並傳遞目前的todos狀態及要刪除的id
  const handleRemove = (id) => {
    setTodos(remove(todos, id))
  }

  // 給id就處理以下事情
  // 修改狀態的3步驟
  // 老師註解：新增一個處理函式, 專門用於改變completed的布林值
  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

  // ---------法二到這裡結束-----------

  return (
    <>
      <h1>Todo代辦事項(買牛奶)</h1>
      {/* 文字輸入框 */}
      <input
        type="text"
        value={inputText}
        // onChange很敏感, 只要一點變化就會捕捉到(像是：輸入無蝦米, 在輸入過程中就會直接顯示拼字於頁面上)
        onChange={(e) => {
          setInputText(e.target.value)
        }}
        //是React中內建的『組字』事件
        // React docs specifies three "composition events --> onCompositionEnd onCompositionStart onCompositionUpdate
        onCompositionStart={() => setIsCompositing(true)}
        onCompositionEnd={() => setIsCompositing(false)}
        onKeyDown={(e) => {
          // 修正入法組字時用Enter鍵送字的bug
          // 如果不是在入當中, 才會讓他進入狀態
          if (e.key === 'Enter' && !isCompositing) {
            //按下Enter鍵時, 加入到待辦事項(也就是todos狀態), 也就是也就是todos陣列的最上面
            // e.target.value --> 指文字輸入框的輸入值
            // 因在新增待辦事項時還沒完成輸入, 所以Completed會是false
            const newTodo = {
              id: Date.now(),
              text: e.target.value,
              completed: false,
            }
            // 1// 2 // 3 --> 簡寫
            // 解釋：...todos:把原本的todos複製出來, newTodo:新增一個物件, setTodos:再把它設定回去
            setTodos([newTodo, ...todos])
            // 按下enter後, 清空輸入框
            setInputText('')
          }
        }}
      />
      <ul>
        {todos.map((v, i) => {
          // 注意： map出來的資料, 若具有新增刪除修改, 其中一種時, 就不能使用索引值當作key值
          // 原因： 因若是資料刪除, 資料索引值會變
          // 解決辦法： 使用id
          return (
            <li key={v.id}>
              <input
                type="checkbox"
                checked={v.completed}
                // onChange={(e) => {
                //1, 2, 拷貝原狀態 --> 拷貝2階層的語法
                // 使用v2是因為, 它是接層中的階層
                //   const newTodos = todos.map((v2) => {
                //     if (v.id === v2.id)
                //       return { ...v2, completed: !v2.completed }
                //     else return { ...v }
                //   })
                //   // 設定回原狀態
                //   setTodos(newTodos)

                //   -------onChange的法二用法-------
                onChange={() => {
                  handleToggleCompleted(v.id)
                }}

                // }}
              />
              {v.completed ? <del>{v.text}</del> : v.text}
              <button
                onClick={() => {
                  handleRemove(v.id)
                }}
              ></button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
