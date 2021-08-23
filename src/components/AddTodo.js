import React, {useState} from 'react'

const AddTodo = () => {

    const [value, setValue] = useState("")
    const [open, setOpen] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(false);
        console.log(value)
        setValue("")
    }

    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <>
            {!open &&
            <button onClick={handleToggle} className="btn btn-primary">Add todo</button>
            }

            {open &&
            <>
                <form onSubmit={handleSubmit} className="mt-3">
                    <input className="w-100 mb-3" value={value} type="text" placeholder="Enter the title for the card"
                           onChange={(e) => setValue(e.target.value)}/>
                    <div className="d-flex align-items-center justify-content-between">
                        <button type="submit" className="btn btn-success">Add todo</button>
                    <button onClick={handleToggle} className="btn btn-outline-danger">Cancel</button>
                    </div>
                </form>
            </>
            }
        </>
    )
}

export default AddTodo