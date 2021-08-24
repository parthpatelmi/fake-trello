import React, { useState } from 'react';

const TodoCard = () => {


    return(
        <>
            <div className="todo-card">
                <div className="todo-title">Title</div>
                <p className="todo-text">This is the first todo text</p>
                <div className="d-flex align-items-center justify-content-between">
                    <select>
                        <option value="todo">Todo</option>
                        <option value="progress">Progress</option>
                        <option value="done">Done</option>
                    </select>
                    <select>
                        <option defaultValue={1} value="1">1</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default TodoCard