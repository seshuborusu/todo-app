import { useState } from "react"
import Tasks from "./Tasks"
function Todo() {
    let [inputdata, setInputData] = useState("")
    let [todolist, setTodolist] = useState([])
    let [view, setView] = useState(false)

    const submitData = () => {
        if (inputdata != "") {
            setTodolist([...todolist, inputdata])
            setInputData("")
        }
        else {
            alert("Please enter the task details")
        }



    }

    return (
        <div className="container my-5">
            <div className="row "><h1 className="my-3 fw-semibold">Todo <span className="text-info fw-bold">App</span></h1></div>
            <div className="row  shadow p-5 rounded " style={{ backgroundColor: "white" }}>

                <div className="col-md-10 col-sm-8  col-lg-10 text-align-center">
                    <input type="text" className="mx-2 form-control" placeholder="Enter Task" onChange={(e) => {
                        setInputData(e.target.value)
                    }} value={inputdata} />
                </div>
                <div className="col-lg-2 col-12 col-md-2">
                    <button className="btn btn-outline-success px-3" onClick={submitData} >Submit</button>
                </div>

            </div>
            <div className="mt-3 d-flex justify-content-center">
                <button onClick={() => {
                    setView(true)
                }} className="btn btn-primary btn-sm" disabled={todolist.length == 0}>View Tasks</button>
            </div>

            {view &&
                <div>            {
                    todolist.map((ele, ind) => {
                        return (

                            <Tasks data={[ele, ind, todolist, setTodolist]} />

                        )
                    })
                }
                </div>
            }


        </div>
    )
}

export default Todo