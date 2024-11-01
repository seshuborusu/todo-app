function Tasks(props) {
    // console.log(props);
    let [name, ind, todolist, setTodoList] = props.data

    const deleteTask = () => {
        let newList=todolist.filter((ele, index) => {
            return index != ind
        })
        setTodoList(newList)
    }
    return (
        <div className="row my-4 p-4 shadow">
            <div className="col-12 col-lg-10 cold-md-10 fw-bold fs-5">{name}</div>
            <div className="col-12 col-md-2 col-lg-2"><button className="btn btn-danger btn-sm px-3" onClick={() => {
                deleteTask(ind)
            }}>Delete</button></div>

        </div>
    )
}
export default Tasks