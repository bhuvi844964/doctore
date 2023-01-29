import React, { useEffect, useState } from "react";
import "./About.css"
import bhuvi from "../../images/doctor.png";
import { useNavigate , useParams , Link } from "react-router-dom";

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

<div className='about-container'>
        
{userData !== null ? 
  userData.map(user => (
    <div className='about-form' key={user.id} >
          <img  src={bhuvi} style= {{width: "120px" , borderRadius:"20px"}} />
          <p>Name : {user.fullName}</p>
          <p>email : {user.email}</p>
          <p>phone : {user.phone}</p>
          <p>Exprerience : {user.exprerience}</p>
          <p>Consultation fees : {user.consultationFee}</p>
          <p>Specialization : {user.specialization}</p>
          <Link to="/appointment"/>
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



