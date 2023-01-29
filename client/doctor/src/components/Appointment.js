import React, { useEffect, useState } from "react";
// import bhuvi from "../images/bhuvi.jpeg";
import {  useParams } from "react-router-dom";

const Appointment = () => {

  const doctorId = useParams().doctorId
  // const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [allData, setAllData] = useState({});
  const [allWeek, setWeekData] = useState({});
  const [allDate, setDateData] = useState({});





  const callAboutPage = async () => {
    try {
      const res = await fetch(`/getDoctoreById/${doctorId}`, {
        //this res is backend response , not from call back function
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data.alldateAppointment);
      console.log(data.allappointment);
      console.log(data.alldateAppointment);

      setUserData(data.message);
      setAllData(data.allappointment)
      setWeekData(data.allweekappointment)
      setDateData(data.alldateAppointment)
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err); 
      //  navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, [doctorId]);

  return (

<div className='login-container'>
    <div className='login-form'>
        <h1>Doctor Appointment</h1>
          <p>Name : {userData.fullName}</p>
          <p>email : {userData.email}</p>
          {/* <img  src={`/images/${userData.profileImage}`} /> */}
          {/* <p>slots : {allData.slots[0]}</p>
          <p>slots : {allData.slots[1]}</p>
          <p>slots : {allData.slots[2]}</p>
           <p>slots : {allData.slots[3]}</p>
          <p>slots : {allData.slots[4]}</p>
          <p>slots : {allData.slots[5]}</p>
          <p>slots : {allData.slots[6]}</p>  */}

    </div>
</div>

  );
};

export default Appointment;

