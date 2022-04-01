import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function StudentTask() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetchlist()
    }, [])


    let fetchlist = async () => {
        try {
            let taskData = await axios.get("https://zentask-backend.herokuapp.com/getsubmitedtask")
            setTasks(taskData.data)
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            <nav className="variant-light d-flex align-item-center justify-content-between" style={{ backgroundColor: "#8CC152" }}>
                <Link to={"/admindashboard"} className='btn btn-primary'>Go Back</Link>
            </nav>

            <section id="gallery">
                <div className="container mt-4">
                    <div className="row">
                        <div className="table-responsive">
                            <table className="table text-left ">
                                <thead className="table" style={{ backgroundColor: "#8CC152" }}>
                                    <tr >
                                        <th>S.no</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Ph.no</th>
                                        <th></th>
                                        <th>Mark</th>
                                        <th>Task URL</th>
                                    </tr>
                                </thead>
                                <tbody className='fw-bold color'>
                                    {
                                        tasks.map((task, index) => { 
                                            return <tr key={index + 1} >
                                                <td>{index + 1}</td>
                                                <td>{task.name}</td>
                                                <td>{task.email}</td>
                                                <td>{task.number}</td>
                                                <td>
                                                    <Link to={`/studenttask/${task._id}`}><button className='btn btn-primary'>Update mark</button></Link>
                                                </td>
                                                <td>{task.marks}</td>
                                                <td>{task.url}</td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default StudentTask