import React, { useEffect, useState } from "react";
import "./About.css";
import bhuvi from "../../images/doctor.png";
import { useNavigate  } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
 
  const [userData, setUserData] = useState(null);


  function onLinkClick(e) {
    e.preventDefault();
       navigate("/appointment/:doctorId");
 }

  const callAboutPage = async () => {
 
    try {
      const res = await fetch("/getDoctore", {
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
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="about-container">
      {userData !== null ? (
        userData.map((user) => (
          <div className="about-form" key={user.id}>
            <img src={bhuvi} style={{ width: "120px", borderRadius: "20px" }} alt="img" />
            <p>Name : {user.fullName}</p>
            <p>email : {user.email}</p>
            <p>phone : {user.phone}</p>
            <p>Exprerience : {user.exprerience}</p>
            <p>Consultation fees : {user.consultationFee}</p>
            <p>Specialization : {user.specialization}</p>
            <p>education : {user.education}</p>
            <button style={{ width: "120px", borderRadius: "20px" }} onClick={onLinkClick} >appointment</button>
          </div>
        ))
      ) : (
        <div>Loading posts...</div> 
      )}
     
    </div>
  );
};

export default About;
