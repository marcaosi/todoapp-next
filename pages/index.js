import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FaTrashAlt } from 'react-icons/fa'

function Home (){
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([])
    const onChangeValue = (evt) => {
        const value = evt.target.value

        setNewTask(value)
    }

    const save = (evt) => {
        evt.preventDefault()
        if(newTask == ""){
            alert("Write a new task to add.")
            return false
        }else{
            const newTasks = [newTask, ...tasks]
            setTasks(newTasks)
        }
    }

    const remove = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index)

        setTasks(newTasks)
    }

    return (
        <div className="container-xl">
            <div className="row">
                <div className="col">
                    <h1>ToDo App.</h1>
                    <p>This app was developed using NextJS! <br /><small>Thank you for using!</small></p>
                    
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-6">
                    <form className="form-inline" onSubmit={save}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control ml-3 mr-3" onChange={onChangeValue} />
                            <button className="btn btn-light" type="submit">Add</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-6">
                    <ul className="list-group">
                        {
                            tasks.map((task, index) => {
                                return (
                                    <li className="list-group-item d-flex align-items-center justify-content-between" key={index}>{task}  <FaTrashAlt onClick={() => remove(index)} /></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home