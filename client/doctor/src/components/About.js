import React, { useEffect, useState } from "react";
import "./about.css"
// import bhuvi from "../images/bhuvi.jpeg";
import { useNavigate , useParams } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
let params = useParams();
  const [userData, setUserData] = useState(null);

  const callAboutPage = async () => {
    try {
      const res = await fetch("/getDoctore", {
        //this res is backend response , not from call back function
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (

<div className='login-container'>
{userData !== null ? 
  userData.map(user => (
    <div className='login-form'>
        <h1>Doctor details</h1>
          <p>Name : {user.fullName}</p>
          <p>email : {user.email}</p>
          <p>phone : {user.phone}</p>
          {/* <img variant="top" src={`/images/${user.profileImage}`}  /> */}
          <p>Exprerience : {user.exprerience}</p>
          <p>Consultation fees : {user.consultationFee}</p>
          <p>Specialization : {user.specialization}</p>
          <p>education : {user.education}</p>
    </div>
    ))
       : (
        <div>Loading posts...</div>
      )}
</div>
  );
};

export default About;



