import axios from 'axios';
import "./Signup.css"
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {

    let navigate = useNavigate()

    let [isClicked, setIsClicked] = useState(false);

    let [file,setFile] = useState("")

    let [signupDetails, setSignupDetails] = useState({
          fullName: "",
          email: "",
          phone:"",
          password: "",
          gender: "",
          exprerience: "",
          consultationFee:"",
          specialization: "",
          education: "",
          address: "",
    })



    const handleChange = (e) => {
        let {name, value} = e.target
        setSignupDetails({...signupDetails, [name]: value})
    }
  

    const handlePhoto = (event)=>{
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }

    
    const handleSubmit = (e) => {
        e.preventDefault()
        let form = new FormData()
        
        form.append("fullName",signupDetails.fullName)
        form.append("gender",signupDetails.gender)
        form.append("email",signupDetails.email)
        form.append("password",signupDetails.password)
        form.append("phone",signupDetails.phone)
        form.append("exprerience",signupDetails.exprerience)
        form.append("consultationFee",signupDetails.consultationFee)
        form.append("specialization",signupDetails.specialization)
        form.append("education",signupDetails.education)
        form.append("address",signupDetails.address)
        form.append("profileImage",file)


        const config = {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }


        axios.post("/registration",form, config).then(res => {
            console.log(res.data)
            alert("Registered Successfully")
            navigate("/login")

        }).catch(error => {
            alert(error.response.data.message)
        })
    }
  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <h1>Sign Up</h1>
           
            <input onChange={handleChange} type='text' name='fullName' placeholder='Full Name' value={signupDetails.fullName}/>
            <input onChange={handleChange} type='text' name='email' placeholder='Email' value={signupDetails.email}/>
            <input onChange={handleChange} type='text' name='phone' placeholder='Phone' value={signupDetails.phone}/>
            <input onChange={handleChange} type='password' name='password' placeholder='Password' value={signupDetails.password}/>
            <input onChange={handleChange} type='text' name='gender' placeholder='gender' value={signupDetails.gender}/>
            <input onChange={handleChange} type='text' name='exprerience' placeholder='Exprerience' value={signupDetails.exprerience}/>
            <input onChange={handleChange} type='text' name='consultationFee' placeholder='Consultation fees' value={signupDetails.consultationFee}/>
            <input onChange={handleChange} type='text' name='specialization' placeholder='specialization' value={signupDetails.specialization}/>
            <input onChange={handleChange} type='text' name='education' placeholder='education' value={signupDetails.education}/>
            <input onChange={handleChange} type='text' name='address' placeholder='address' value={signupDetails.address}/>
            <input onChange={handlePhoto} type='file' name='profileImage'/>
            {!isClicked?<Link to="/login">Already Registered?</Link>:<Link to="/signup" onClick={()=>setIsClicked(!isClicked)} >Back</Link> }
            
            {!isClicked?<button onClick={()=>setIsClicked(!isClicked)} >Register</button>:<button onClick={handleSubmit} >Register</button>}
        </div>
    </div>
  )
}

export default Signup






