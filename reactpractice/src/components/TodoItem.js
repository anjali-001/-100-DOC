import React from 'react'
import todosData from './todosData'

function TodoItem(props) {
    return(
        <div className='todo-item'>
            <input type="checkbox"/>
        <h3>{props.item.text}</h3>
    
    </div>
    )
}

export default TodoItem