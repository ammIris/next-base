import { useState } from 'react'
import AddForm from './add-form'
//引入這個資料夾, 相當於引入這個資料夾的index
import List from './list'
import styles from './todo.module.css'

export default function TodoIndex() {
// 過濾用的選項(只能使用"所有“｜"進行中”|“已完成")
const [type, setType] = useState('所有')
const typeOptions = ['所有', '進行中', '已完成']
  // 全選用 如果isSelectedAll是true那選取框就會勾起來
  const [isSelectedAll, setIsSelectedAll] = useState(false)

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

  // 第1和2步驟
  // 純函式: 新增todo
  // return返回的會是陣列, 因todos就是個陣列
  // ?? why dont use todos, id ? ? ? ? ?
  const add = (todos, text) => {
    //利用todos去map所有的id出來
    // 提取所有todos陣列中的id
    const ids = todos.map((v) => {
      v.id
    })

    const toggleSelectedAll = (todos, newIsSelectedAll = false) => {
      return todos.map((v) => {
        //       // 如果與目前傳入的id相符合, 切換completed的布林值
        //       // return {...v}會是回傳新陣列, 差異在於若isbn碼有對應到, fav會改變
        return { ...v, completed: newIsSelectedAll }
      })
    }

    // 專門用於改變專門用於改變completed的的布林值的布林值處理的函式
    const handleSelectedAll = (newIsSelectedAll) => {
      setTodos(toggleSelectedAll(todos, newIsSelectedAll))
    }

    // 抽取出id後, 幫所有的id加1
    // 新項目的id為所有為所有id中最大值+1, 如果todos為空陣列, 則從1開始編號
    // const newId = Math.max(...ids) + 1
    const newId = todos.length > 0 ? Math.max(...ids) + 1 : 1

    // 建立新的待辦事項的項目
    const newTodo = {
      id: newId,
      text,
      completed: false,
    }
    // 回傳新的todos狀態
    return [newTodo, ...todos]
  }

  // why why why 這樣設
  // 用於新增的處理函式
  const handleAdd = (text) => {
    setTodos(add(todos, text))
  }

  // 修改狀態的第3步驟
  // 給id就處理以下事情
  // 老師註解：專門用於改變completed的布林值的處理函式
  const handleToggleCompleted = (id) => {
    setTodos(toggleCompleted(todos, id))
  }

  // 刪除的第3步驟
  // 設定刪除的處理函式
  // id代表要刪除的待辦事項的id
  //remove(todos, id), 呼叫了之前定義的remove函式並並傳遞目前的todos狀態及要刪除的id
  const handleRemove = (id) => {
    setTodos(remove(todos, id))
  }

  // ---------法二到這裡結束-----------

  return (
    <>
      <h1>Todo代辦事項(買牛奶)</h1>
      {/* 文字輸入框 */}
      <AddForm handleAdd={handleAdd} />
      <div>
        <input
          type="checkbox"
          checked={isSelectedAll}
          onChange={() => {
            // 讓全選的選取框打勾 , 接著才是做--> 當全選選取框打勾時, 其他的代辦事項也要一起打勾
            setIsSelectedAll(!isSelectedAll)
            // handleSelectedAll(!isSelectedAll)
          }}
        />
        全選
      </div>
      {/* 會顯示清單 */}
      <List
        todos={todos}
        handleRemove={handleRemove}
        handleToggleCompleted={handleToggleCompleted}
      />
      {typeOptions.map((v,i)=>{ 
        return <button 
        // 為什麼key可以用i ? 因這三個按鈕呈現出來的會是靜態資料, 沒有增刪修
        // 如果它會新增刪除修改, 那key就要給不會變的值
        key={i}
        // 按了什麼設定進去什麼
        onClick ={()=>{setType(v)}}
        className={v=== type ? styles['button-normal'] : styles['button-normal']}>{v}</button> })}
      {/* <button className={styles['button-normal']}>全部</button>
      <button className={styles['button-active']}>進行中</button>
      <button className={styles['button-active']}>已完成</button> */}
    </>
  )
}
