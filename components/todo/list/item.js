import styles from '../todo.module.css'

export default function Item(
  id,
  completed,
  text,
  handleRemove,
  handleToggleCompleted
) {
  // <li key={v.id}>, 其中v是todos.map出來的東西, 但因爲todos裡面的屬性不多, 所以直接拆開給他
  return (
    <>
      <li>
        <input
          type="checkbox"
          checked={completed}
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
            handleToggleCompleted(id)
          }}

          // }}
        />
        <span className={completed ? styles['completed'] : styles.active}>
          {text}
        </span>
        <button
          onClick={() => {
            handleRemove(id)
          }}
        ></button>
      </li>
    </>
  )
}
