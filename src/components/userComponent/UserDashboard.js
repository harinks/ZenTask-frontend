import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

function UserDashboard() {

    const [taskList, setTaskList] = useState([])
    const navigate = useNavigate();

    useEffect(async () => {
        try {
            let dashboard = await axios.get("https://zentask-backend.herokuapp.com/userdashboard", {
                headers: {
                    Authorization: window.localStorage.getItem("my_token")
                }
            })
            console.log(dashboard.data.authorization)
        } catch (error) {
            console.log(error)
        }
    }, [])

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
                                <Button className="btn btn-danger" onClick={handleLogout}>Logout</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <div id="content-wrapper" className="d-flex flex-column ">
                    <div id="content">
                        <h2 className="text-center my-4">All Assignment Task</h2>
                        <div className="row">
                            <section id="gallery">
                                <div className="container mt-4 ">
                                    <div className="row">
                                        {
                                            taskList.map((task, index) => {
                                                return <div className="col-lg my-3">

                                                    <div className="card text-right border border-black" style={{ color: "black" }} id="cardhover" >
                                                        <div className="card-body border border-black" >

                                                            <h5 className="text-danger ">Task{index + 1} - {task.taskname}</h5>
                                                            <hr></hr>
                                                            <p>{task.description}</p>
                                                            <p className="mb-1"><b>Taskdate : </b>{task.taskdate}</p>
                                                            <p><b>Lastdate : </b>{task.enddate}</p>

                                                            <Link to={"/submitform"} >
                                                                <button className='btn btn-success mt-3 w-40'>Submit Task</button>
                                                            </Link>

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
        </div>
    )
}

export default UserDashboard