// import React, { useEffect, useState } from "react";
// // import bhuvi from "../images/bhuvi.jpeg";
// import {  useParams } from "react-router-dom";

// const Appointment = () => {

//   const doctorId = useParams().doctorId
//   // const navigate = useNavigate();
//   const [userData, setUserData] = useState({});
//   const [allData, setAllData] = useState({});
//   const [allWeek, setWeekData] = useState({});
//   const [allDate, setDateData] = useState({});





//   const callAboutPage = async () => {
//     try {
//       const res = await fetch(`/getDoctoreById/${doctorId}`, {
//         //this res is backend response , not from call back function
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });
//       const data = await res.json();
//       console.log(data.alldateAppointment);
//       console.log(data.allappointment);
//       console.log(data.alldateAppointment);

//       setUserData(data.message);
//       setAllData(data.allappointment)
//       setWeekData(data.allweekappointment)
//       setDateData(data.alldateAppointment)
//       if (!res.status === 200) {
//         const error = new Error(res.error);
//         throw error;
//       }
//     } catch (err) {
//       console.log(err); 
//       //  navigate("/login");
//     }
//   };

//   useEffect(() => {
//     callAboutPage();
//   }, [doctorId]);

//   return (

// <div className='login-container'>
//     <div className='login-form'>
//         <h1>Doctor details</h1>
//           <p>User ID : 123456789</p>
//           <p>Name : {userData.fullName}</p>
//           <p>email : {userData.email}</p>
//           {/* <img  src={`/images/${userData.profileImage}`} /> */}
//           <p>phone : {userData.phone}</p>
//           <p>Profession : Web developer</p>

//     </div>
// </div>

//   );
// };

// export default Appointment;





import React, { useState } from 'react'
import moment from 'moment';
//  import './App.css'

const Appointment = () => {
  let intime = "12:00 Pm"
  let outtime = "08:00 Pm"
  const [result, setResult] = useState([])
  console.log("Array", result)

  function intervals(startString, endString) {
    var start = moment(startString, 'hh:mm a');
    var end = moment(endString, 'hh:mm a');
    start.minutes(Math.ceil(start.minutes() / 15) * 15);

    var current = moment(start);

    while (current <= end) {
      if (result.includes(current.format('hh:mm a'))) {
        return null
      }
      else {
        result.push(current.format('hh:mm a'));
        current.add(15, 'minutes');
      }
    }


    return result;
  }

  intervals(intime, outtime);
  return (
    <div className='slots'>
      {
        result && result.length > 0 ? result.map((time, index) => {
          return (
            <div key={index}>
              <p>{time}</p>
            </div>
          )
        }) : null
      }
    </div>
  )
}

export default Appointment




