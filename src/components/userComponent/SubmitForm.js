import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SubmitForm() {

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: '',
            url: '',
        },
        onSubmit: async (values) => {

            try {
                await axios.post("https://zentask-backend.herokuapp.com/submittask", values)
                alert("Your Task Submitted")
                navigate("/dashboard")
            } catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <>
            <div className='container mt-5'>
                <div className='row color'>
                    <h4 className='mb-5 text-center'>Task Submission</h4>
                    <form onSubmit={formik.handleSubmit}>

                        {/* <div className="form-outline mb-4">
                        <label className="form-label" for="form6Example3">Image URL</label>
                        <input type="text" name='imgUrl' id="form6Example3" className="form-control" onChange={formik.handleChange} value={formik.values.imgUrl} placeholder="img-url" required />
                    </div> */}

                        <div className="form-outline mb-4">
                            <label className="form-label">Your Name</label>
                            <input type="text" className="form-control w-50" name='name' onChange={formik.handleChange} value={formik.values.name} placeholder="Name" required />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control w-50" name='email' onChange={formik.handleChange} value={formik.values.email} placeholder="email" required />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label">Phone No.</label>
                            <input type="tel" name="number" className="form-control w-50" onChange={formik.handleChange} value={formik.values.number} required />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label">Your Task Link</label>
                            <input type="url" name="url" className="form-control" onChange={formik.handleChange} value={formik.values.url} required />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">Submit Task</button>
                        <Link to="/dashboard">
                            <button type="submit" className="btn btn-primary btn-block mx-4 mb-4">Go Back</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SubmitForm