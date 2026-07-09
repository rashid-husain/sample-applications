import { useFormik } from 'formik';
import React, { Fragment } from 'react'
import * as Yup from 'yup';

const RegistrationForm = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const a = 10;
    const b = "Hello"

    const object = {
        name: 'Rashid',
        rollNumber: 1232,
        class: "B. Tech",
        college: 'ITM'
    }

    console.log("Type of Object: ", typeof (JSON.stringify(object)));
    console.log('Email Regex: ', typeof (emailRegex));
    console.log('Type of a: ', typeof (a));
    console.log('Type of b: ', typeof (b));


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required Field'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required Field'),
            email: Yup.string()
                .required('Required Field')
                .matches(emailRegex, 'Invalid email address.'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Required Field')
                .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
                .matches(/[0-9]/, 'Must contain at least one number')
                .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain at least one symbol'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required Field')
        })
    })

    console.log('Formik values:', formik);

    return (
        // It is a fragment
        //   <Fragment>
        //         <div>Registration Form</div>
        //         <div>Form Starting from here</div>
        //   </Fragment>
        <>
            <div>Registration Form</div>
            <div>
                <form onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}    >
                    {
                        formik.errors.firstName && formik.touched.firstName && formik.errors.lastName && formik.touched.lastName ? (
                            <div style={{ color: 'red', fontSize: '10px' }}>Please fill the form</div>
                        ) : null
                    }
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div style={{color: 'red', fontSize: '10px'}}>{formik.errors.firstName}</div>
                        ) : null}

                    </div>
                    <div>

                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div style={{color: 'red', fontSize: '10px'}}>{formik.errors.lastName}</div>
                        ) : null}
                    </div>

                    <div>
                        <label>Email Address</label>
                        <input id='email' name='email' type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                        {formik.touched.email && formik.errors.email ? (
                            <div style={{ color: 'red', fontSize: '10px' }}>{formik.errors.email}</div>
                        ) : null}
                    </div>

                    <div>
                        <label>Password</label>
                        <input id='password' name='password' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                        {formik.touched.password && formik.errors.password ? (
                            <div style={{ color: 'red', fontSize: '10px' }}>{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div>
                        <label>Confirm Password</label>
                        <input id='confirmPassword' name='confirmPassword' type="password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmPassword} />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div style={{ color: 'red', fontSize: '10px' }}>{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>

                    <div>
                        <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default RegistrationForm;