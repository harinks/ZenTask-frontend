import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditTask() {

    let params = useParams()
    const navigate = useNavigate()

    useEffect(async () => {
        try {
            let taskData = await axios.get(`https://zentask-backend.herokuapp.com/task/${params.id}`)
            formik.setValues(taskData.data)
        } catch (error) {
            console.log(error)
        }

    }, [])

    const formik = useFormik({
        initialValues: {
            taskname: "",
            description: "",
            taskdate: "",
            enddate: ""
        },
        onSubmit: async (values) => {
            delete values._id;
            try {
                await axios.put(`https://zentask-backend.herokuapp.com/task/${params.id}`, values)
                navigate("/admindashboard")
            } catch (error) {
                console.log(error)
            }
        }
    })



    return (
        <div className='container mt-5'>
            <div className='row color'>
                <h4 className='mb-4 text-center'>Edit Task</h4>
                <form onSubmit={formik.handleSubmit}>

                    <div className="form-outline mb-4">
                        <label className="form-label">Task name</label>
                        <input type="text" className="form-control" name='taskname' onChange={formik.handleChange} value={formik.values.taskname} placeholder="Task Name" required />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" name='description' onChange={formik.handleChange} value={formik.values.description} placeholder="description" required />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Task Date</label>
                        <input type="date" name="taskdate" className="form-control w-50"  style={{boxShadow:"none" }} onChange={formik.handleChange} value={formik.values.taskdate} required />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">End Date</label>
                        <input type="date" name="enddate" className="form-control w-50" style={{boxShadow:"none" }} onChange={formik.handleChange} value={formik.values.enddate} />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block my-4">Edit Task</button>
                    <Link to="/admindashboard">
                        <button type="submit" className="btn btn-primary btn-block mx-4 my-4">Go Back</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default EditTask