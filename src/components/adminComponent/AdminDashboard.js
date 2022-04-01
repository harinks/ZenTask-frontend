import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function AdminDashboard() {

    const [taskList, setTaskList] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetchtasks()
    }, [])

    let fetchtasks = async () => {
        try {
            let alltask = await axios.get("https://zentask-backend.herokuapp.com/task")
            setTaskList(alltask.data)
        } catch (error) {
            console.log(error)
        }
    }

    let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure want to delete?")
            if (result) {
                await axios.delete(`https://zentask-backend.herokuapp.com/task/${id}`)
                fetchtasks();
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("my_token");
        navigate('/');
    }

    return (
        <div>
            <Navbar variant="light" expand="lg" style={{ backgroundColor: "#8CC152" }}>
                <Container>
                    <Navbar.Brand href="#home">
                        <h1 className="my-1" style={{ fontFamily: "Ubuntu", textShadow: "0 0 2px #FF0000, 0 0 3px #0000FF" }}>ZenTask</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link>
                                <Link to="/studenttask">
                                    <Button>Student Task</Button>
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Button className='btn btn-danger' onClick={handleLogout}>Logout</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <div id="content-wrapper" className="d-flex flex-column ">
                    <div id="content">

                        <div className="d-sm-flex align-items-center justify-content-between mb-4 mt-3">
                            <h1 className="h5 mb-0 text-gray ml-3">All Assignment Task</h1>
                            <Link to={"/add-task"} className="d-sm-inline-block btn btn-sm btn-primary shadow-sm mt-3 mx-4 px-3">Create New Task</Link>
                        </div>

                        <div className="row">
                            <section id="gallery">
                                <div className="container mt-4">
                                    <div className="row">
                                        {
                                            taskList.map((task, index) => {
                                                return <div className="col-lg my-3 ">
                                                    <div className="card border border-black" style={{ color: "black" }} id="cardhover">
                                                        <div className="card-body border border-black">

                                                            <h5 className="text-danger ">Task{index + 1} - {task.taskname}</h5>
                                                            <hr></hr>
                                                            <p>{task.description}</p>
                                                            <p className="mb-1"><b>Taskdate : </b>{task.taskdate}</p>
                                                            <p><b>Lastdate : </b>{task.enddate}</p>

                                                            <Link to={`/edit-task/${task._id}`}><button className='btn btn-primary'>Edit</button></Link>
                                                            <button onClick={() => handleDelete(task._id)} className='btn btn-danger mx-3'>Delete</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }

                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </Container>
        </div >
    )
}

export default AdminDashboard