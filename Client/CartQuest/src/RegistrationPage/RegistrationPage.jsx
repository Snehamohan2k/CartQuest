import react, { useEffect } from 'react'
import { useState } from 'react'
import './RegistrationPage.scss'
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { validateFormData } from '../utils/util'
import { Link } from 'react-router-dom'
const RegistrationPage = () => {
    const initialValues = {
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: ''
    }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setFormValues({
            ...formValues,
            [name]: value
        })
        console.log(formValues)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validateFormData(formValues))
        setIsSubmit(true)
    }
    useEffect(() => {
        console.log(formErrors)
        if (Object.keys(formErrors).length == 0 && isSubmit) {
            console.log(formValues)
        }
    }, [formErrors])

    return (
        <div className='registration-page'>
            <div className='registration-wrapper'>
                <form action="" onSubmit={handleSubmit}>
                    <h1>We're delighted you're here! </h1>
                    <div className="input-box">
                        <div className='user-details'>User Name</div>
                        <input
                            type="text"
                            name='userName'
                            placeholder="User Name"
                            required
                            value={formValues.userName}
                            onChange={handleChange}
                        ></input>
                        <FaUser className="icon" />
                    </div>
                    <p className='form-error'>{formErrors.userName}</p>
                    <div className="input-box">
                        <div className='user-details'>E-mail ID</div>
                        <input
                            type="e-mail"
                            name='email'
                            placeholder="E-mail id"
                            required
                            value={formValues.email}
                            onChange={handleChange}

                        ></input>
                        <IoMail className='icon' />
                    </div>
                    <p className='form-error'>{formErrors.email}</p>
                    <div className="input-box">
                        <div className='user-details'>Password</div>
                        <input
                            type="password"
                            name='password'
                            placeholder="Password"
                            required
                            value={formValues.password}
                            onChange={handleChange}

                        ></input>
                        <FaLock className="icon" />
                    </div>

                    <p className='form-error'>{formErrors.password}</p>
                    <div className="input-box">
                        <div className='user-details'>Confirm Password</div>
                        <input
                            type="password"
                            name='confirmPassword'
                            placeholder="Confirm Password"
                            required
                            value={formValues.confirmPassword}
                            onChange={handleChange}

                        ></input>
                        <FaLock className="icon" />
                    </div>
                    <p className='form-error'>{formErrors.confirmPassword}</p>
                    <div className="input-box">
                        <div className='user-details'>Phone Number</div>
                        <input
                            type='tel'
                            name='phoneNumber'
                            placeholder="Phone Number"
                            required
                            value={formValues.phoneNumber}
                            onChange={handleChange}
                        ></input>
                        <FaMobileScreen className='icon' />

                    </div>
                    <p className='form-error'>{formErrors.phoneNumber}</p>
                    <button className="register-button" type="submit">Begin your Quests </button>
                    <div className="login-page">
                        <p>Already have an account? <Link className="login-link" to="/">Login</Link>
                        </p>
                    </div>
                </form>
               
            </div>
        </div>
    )
}
export default RegistrationPage