import React from 'react'
import TodoCard from "../../components/TodoCard";

const ProgressContainer = () => {

    return (
        <>
            <div className="contanier">
                <div className="wrapper p-3">
                    <div className="row ">
                        <div className="col-12 mb-3">
                            <h2 className="text-center">In Progress</h2>
                        </div>
                        <div className="col-12 mb-3">
                            <TodoCard/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressContainer;