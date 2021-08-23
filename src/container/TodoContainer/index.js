import React from 'react'
import TodoCard from "../../components/TodoCard";
import AddTodo from "../../components/AddTodo";

const TodoContainer = () => {

    return (
        <>
            <div className="contanier">
                <div className="wrapper p-3">
                    <div className="row ">
                        <div className="col-12 mb-3">
                            <h2 className="text-center">Todo</h2>
                        </div>
                        <div className="col-12 mb-3">
                            <TodoCard/>
                        </div>
                        <div className="col-12">
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoContainer;