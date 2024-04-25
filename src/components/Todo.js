import React from 'react'

export default function Todo({todo,toggleList}) {
    function handleChecked(){
        toggleList(todo.id)
    }
  return (
    <div>
      <ul>
        <li><input type='checkbox' checked={todo.complete} onChange={handleChecked} />{todo.name}</li>
      </ul>
    </div>
  )
}
