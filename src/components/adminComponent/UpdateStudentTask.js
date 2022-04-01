import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function UpdateStudentTask() {

    let params = useParams()
    const navigate = useNavigate()

    useEffect(async () => {
        try {
            let taskData = await axios.get(`https://zentask-backend.herokuapp.com/getSubmitedtask/${params.id}`)
            formik.setValues(taskData.data)
        } catch (error) {
            console.log(error)
        }

    }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: '',
            url: '',
            marks: 0
        },
        onSubmit: async (values) => {
            delete values._id;
            try {
                let result = window.confirm("Are you sure want to update?")
                if (result) {
                    await axios.put(`https://zentask-backend.herokuapp.com/getSubmitedtask/${params.id}`, values)
                    navigate("/studenttask")
                }
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <div className='container mt-5'>
            <div className='row color'>
                <h4 className='mb-4 text-center'>Update</h4>
                <form onSubmit={formik.handleSubmit}>

                    <div className="form-outline mb-4">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control w-50" name='name' value={formik.values.name} placeholder="Name" required />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control w-50" name='email ' value={formik.values.email} placeholder="email" required />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Phone No.</label>
                        <input type="tel" name="number" className="form-control w-50" value={formik.values.number} required />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Submitted Link</label>
                        <input type="url" name="url" className="form-control" value={formik.values.url} required />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label">Marks</label>
                        <input type="number" name="marks" className="form-control w-50" onChange={formik.handleChange} value={formik.values.marks} required />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block my-4">Update</button>
                    <Link to="/studenttask">
                        <button type="submit" className="btn btn-primary btn-block mx-4 my-4">Go Back</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudentTask