import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';


function AdminLogin() {

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: 'admin@gmail.com',
            password: 'admin123'
        },
        onSubmit: async (values) => {
            try {
                navigate("/admindashboard")
            } catch (error) {
                console.log(error)
            }
        },
    });

    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: "#8CC152" }}>
                <div className="container-fluid py-3 h-100" id='adminlogin'>
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card " id='card' >
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://wallpaperaccess.com/full/186244.jpg"
                                            alt="login form"
                                            className="img-fluid w-100 h-100"
                                            id='loginimg'
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-5 p-lg-5 text-black">

                                            <form onSubmit={formik.handleSubmit}>

                                                <div className="d-flex align-items-center mb-5 pb-1">
                                                    <span className="h1 fw-bold mb-0">Admin</span>
                                                </div>

                                                <div className="form-outline mb-4 pwd ">
                                                    <input type="email" className="form-control form-control-lg" placeholder='Email address' name='email' onChange={formik.handleChange}
                                                        value={formik.values.email} required />
                                                </div>
                                                <div className="form-outline mb-4 pwd ">
                                                    <input type="password" name='password' className="form-control form-control-lg" placeholder='password' onChange={formik.handleChange}
                                                        value={formik.values.password} required />
                                                </div>
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-md mb-2">Admin login</button>
                                                </div>
                                                <div>
                                                    <p>
                                                        For User login? <Link to='/'>Login here</Link>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminLogin