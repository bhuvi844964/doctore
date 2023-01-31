import React, { useEffect, useState } from "react";
import "./Appointment.css";
import { useParams , useNavigate } from "react-router-dom";

const Appointment = ( ) => {

  const navigate = useNavigate();
 
  const doctorId = useParams().doctorId;
  const [userData, setUserData] = useState({});
  const [allData, setAllData] = useState({});
  const [allWeek, setWeekData] = useState({});
  const [allDate, setDateData] = useState({});



  const onLinkClick = (e)=> {
    e.preventDefault();
    navigate("/about");
 }



  useEffect(()=>{
    async function ttt() {
      const res =await  fetch(`/getDoctoreById/${doctorId}`, {

        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
    
  
      setUserData(data.message);
      setAllData(data.allappointment);
      setWeekData(data.allweekappointment);
      setDateData(data.alldateAppointment);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    ttt()
   
  },[doctorId])
  
  
        
          
  return (
    <div className="appointment-container">
    <h1 className="appointment-form">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{userData.fullName} &nbsp;&nbsp;&nbsp; <spam style= {{fontSize: "1.5rem"}} >Fees = {userData.consultationFee} ₹</spam></h1>
         <p className="appoint-form">{userData.specialization}</p>
 <div><table>
 <thead>
   <tr>
            <th >SUN</th>
            <th >MON</th>
            <th >TUE</th>
            <th >WED</th>
            <th >THU</th>
            <th >FRI</th>
            <th >SAT</th>
   </tr>
   {allDate && allDate.appointmentDate && allDate.appointmentDate[0] && allDate.appointmentDate[1] &&  allDate.appointmentDate[2] && allDate.appointmentDate[3] &&allDate.appointmentDate[4] &&  allDate.appointmentDate[5] && allDate.appointmentDate[6] &&
  
   <tr>
            <th >{allDate.appointmentDate[0]}</th>
            <th >{allDate.appointmentDate[1]}</th>
            <th >{allDate.appointmentDate[2]}</th>
            <th >{allDate.appointmentDate[3]}</th>
            <th >{allDate.appointmentDate[4]}</th>
            <th >{allDate.appointmentDate[5]}</th>
            <th >{allDate.appointmentDate[6]}</th>
   </tr>
   }
 </thead>
 <tbody>
 {allData && allData.slots && allData.slots[0] && 
  <tr>
    <td >{allData.slots[0]}</td>
    <td >{allData.slots[0]}</td>
    
    <td >{allData.slots[0]}</td>
    <td >{allData.slots[0]}</td>
    <td >{allData.slots[0]}</td>
    
    <td >{allData.slots[0]}</td>
    <td >{allData.slots[0]}</td>
  </tr>
}
 {allData && allData.slots && allData.slots[1] && 
  <tr>
    <td >{allData.slots[1]}</td>
    <td >{allData.slots[1]}</td>
    
    <td >{allData.slots[1]}</td>
    <td >{allData.slots[1]}</td>
    <td >{allData.slots[1]}</td>
    
    <td >{allData.slots[1]}</td>
    <td >{allData.slots[1]}</td>
  </tr>
}
 {allData && allData.slots && allData.slots[2] && 
  <tr>
    <td >{allData.slots[2]}</td>
    <td >{allData.slots[2]}</td>
    
    <td >{allData.slots[2]}</td>
    <td >{allData.slots[2]}</td>
    <td >{allData.slots[2]}</td>
    
    <td >{allData.slots[2]}</td>
    <td >{allData.slots[2]}</td>
  </tr>
}
 {allData && allData.slots && allData.slots[3] && 
  <tr>
    <td >{allData.slots[3]}</td>
    <td >{allData.slots[3]}</td>
    
    <td >{allData.slots[3]}</td>
    <td >{allData.slots[3]}</td>
    <td >{allData.slots[3]}</td>
    
    <td >{allData.slots[3]}</td>
    <td >{allData.slots[3]}</td>
  </tr>
}
 {allData && allData.slots && allData.slots[4] && 
  <tr>
    <td >{allData.slots[4]}</td>
    <td >{allData.slots[4]}</td>
    
    <td >{allData.slots[4]}</td>
    <td >{allData.slots[4]}</td>
    <td >{allData.slots[4]}</td>
    
    <td >{allData.slots[4]}</td>
    <td >{allData.slots[4]}</td>
  </tr>
}
 {allData && allData.slots && allData.slots[5] && 
  <tr>
    <td >{allData.slots[5]}</td>
    <td >{allData.slots[5]}</td>
    
    <td >{allData.slots[5]}</td>
    <td >{allData.slots[5]}</td>
    <td >{allData.slots[5]}</td>
    
    <td >{allData.slots[5]}</td>
    <td >{allData.slots[5]}</td>
  </tr>
}
 {allData && allData.slots && allData.slots[6] && 
  <tr>
    <td >{allData.slots[6]}</td>
    <td >{allData.slots[6]}</td>
    
    <td >{allData.slots[6]}</td>
    <td >{allData.slots[6]}</td>
    <td >{allData.slots[6]}</td>
    
    <td >{allData.slots[6]}</td>
    <td >{allData.slots[6]}</td>
  </tr>
}
 {allData && allData.slots && allData.slots[7] && 
  <tr>
    <td >{allData.slots[7]}</td>
    <td >{allData.slots[7]}</td>
    
    <td >{allData.slots[7]}</td>
    <td >{allData.slots[7]}</td>
    <td >{allData.slots[7]}</td>
    
    <td >{allData.slots[7]}</td>
    <td >{allData.slots[7]}</td>
  </tr>
}
 </tbody>
</table></div>
      
        <button onClick={onLinkClick} >Back to about page</button>
    </div>
  );
};

export default Appointment;
