import { IoMdTime } from "react-icons/io";

function Tasks(props) {
    // console.log(props);
    let [name, ind, todolist, setTodoList] = props.data

    const deleteTask = () => {
        let newList=todolist.filter((ele, index) => {
            return index != ind
        })
        setTodoList(newList)
    }

    const date=new Date()
    const showtime=`${date.getHours()} :  ${date.getMinutes()}   : ${date.getSeconds()}`

    return (
        <div className="row my-4 p-3 rounded shadow-sm d-flex align-items-center" style={{backgroundColor:"white"}}>
            <div className="col-12 col-lg-6 cold-md-10 fw-bold fs-5">{name}</div>
            <div className="col-lg-4 text-gray fs-6">{showtime}</div>
            <div className="col-12 col-md-2 col-lg-2"><button className="btn btn-danger btn-sm px-3" onClick={() => {
                deleteTask(ind)
            }}>Delete</button></div>

        </div>
    )
}
export default Tasks;