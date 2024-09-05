import React,{useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { updateUser } from './../../store/userSlice';
import "../Form/Form.css"

function Form() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user )

    const [userData, setUserData] = useState({name: user?.name || "", email: user?.email || "" , phonenumber: user?.phonenumber || ""})
    const [errors, setErrors] = useState({})

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
    const phoneRegex = /^[0-9]{10}$/;

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const validate = () => {
        let formErrors = {}

        if(!emailRegex.test(userData.email) ){
            formErrors.email = 'Invalid email address';
        }

        if (!phoneRegex.test(userData.phonenumber)) {
            formErrors.phone = 'Phone number must be exactly 10 digits';
        }
      
        return formErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let validationErrors = validate();

        if(Object.keys(validationErrors).length === 0 ) {
            dispatch(updateUser(userData))
            setErrors({})
            alert("form submitted successfully")
        }else{
            setErrors(validationErrors);
        }
    }
  return (
    <div className='form'>
        <h1>User Details</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='user-name'>User Name</label>
                <input name="name" id="user-name" type="text" placeholder='Enter User Name' value={userData.name} onChange={handleChange}/>
            </div>
          <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Enter Email Address'
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            name="phonenumber"
            id='phone'
            placeholder='Enter Phone number'
            value={userData.phonenumber}
            onChange={handleChange}
          />
          {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
        </div>
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form