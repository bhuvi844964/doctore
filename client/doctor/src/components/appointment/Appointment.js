import React, { useEffect, useState } from "react";
import "./Appointment.css";
import { useParams , useNavigate } from "react-router-dom";

const Appointment = ( ) => {

  const navigate = useNavigate();
 
  const doctorId = useParams().doctorId;
  const [userData, setUserData] = useState({});
  const [allData, setAllData] = useState({});
  const [allWeek, setWeekData] = useState({});
  const [allWeek1, setWeekData1] = useState({});
  const [allWeek2, setWeekData2] = useState({});
  const [allWeek3, setWeekData3] = useState({});
  const [allWeek4, setWeekData4] = useState({});
  const [allWeek5, setWeekData5] = useState({});
  const [allWeek6, setWeekData6] = useState({});
  const [allDate, setDateData] = useState({});
  const [allDate1, setDateData1] = useState({});
  const [allDate2, setDateData2] = useState({});
  const [allDate3, setDateData3] = useState({});



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
      const data = await res.json();
      console.log(data);
    
  
      setUserData(data.message);
      setAllData(data.allappointment[0]);
      setWeekData(data.allweekappointment[0]);
      setWeekData1(data.allweekappointment[1]);
      setWeekData2(data.allweekappointment[2]);
      setWeekData3(data.allweekappointment[3]);
      setWeekData4(data.allweekappointment[4]);
      setWeekData5(data.allweekappointment[5]);
      setWeekData6(data.allweekappointment[6]);
     
      setDateData(data.alldateAppointment[0]);
      setDateData1(data.alldateAppointment[1]);
      setDateData2(data.alldateAppointment[2]);
      setDateData3(data.alldateAppointment[3]);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    }
    ttt()
   
  },[doctorId])
  
  




  console.log(allDate1);
  // console.log(allWeek2);
  // console.log(allWeek3);
  // console.log(allWeek4);
  // console.log(allWeek5);
  // console.log(allWeek6);
  // console.log(allWeek.weekAvailability);

  // console.log(userData);
        
          
  return (
    <div className="appointment-container">
    <h1 className="appointment-form">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{userData.fullName} &nbsp;&nbsp;&nbsp; <spam style= {{fontSize: "1.5rem"}} >Fees = {userData.consultationFee} ₹</spam></h1>
         <p className="appoint-form">{userData.specialization}</p>
 <div>


{allData && allData.slotType === "all" &&
 <table>
 <thead>
 {
   <tr>     
   <th >THU</th>
   <th >FRI</th>
   <th >SAT</th>
   </tr>
 }
   <tr>
    
   <th >02-02-2023</th>
   <th >03-02-2023</th>
   <th >04-02-2023</th>
    
   </tr>
  
 </thead>
 <tbody>
 {allData && allData.slots && allData.slots[0] && 
  <tr>
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
  </tr>
}
 {allData && allData.slots && allData.slots[2] && 
  <tr>
   
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
  </tr>
}
 {allData && allData.slots && allData.slots[4] && 
  <tr>
  
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
  </tr>
}
 {allData && allData.slots && allData.slots[6] && 
  <tr>
   
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
  </tr>
}
 </tbody>
</table>
}


{allWeek && allWeek.slotType === "week" &&
 <table>
 <thead>
 {allWeek  && allWeek.weekAvailability && 
   <tr>     
   <th >{allWeek3.weekAvailability}</th>
   <th >{allWeek4.weekAvailability}</th>
   <th >{allWeek5.weekAvailability}</th>
   
   </tr>
  }
   <tr>
   <th >{allWeek3.startDate}</th>
   <th >{allWeek4.startDate}</th>
   <th >{allWeek5.startDate}</th>
   </tr>

 </thead>
 <tbody>
 {allWeek && allWeek.slots && allWeek.slots[0] && 
  <tr>
  
  <td >{allWeek3.slots[0]}</td>
  <td >{allWeek4.slots[0]}</td>
  <td >{allWeek5.slots[0]}</td>
    
   
  </tr>
}
 {allWeek && allWeek.slots && allWeek.slots[1] && 
  <tr>
  
  <td >{allWeek3.slots[1]}</td>
  <td >{allWeek4.slots[1]}</td>
  <td >{allWeek5.slots[1]}</td>
  
 
  </tr>
}
 {allWeek && allWeek.slots && allWeek.slots[2] && 
  <tr>
   
  <td >{allWeek3.slots[2]}</td>
  <td >{allWeek4.slots[2]}</td>
  <td >{allWeek5.slots[2]}</td>
    
 
  </tr>
}
 {allWeek && allWeek.slots && allWeek.slots[3] && 
  <tr>
   
  <td >{allWeek3.slots[3]}</td>
  <td >{allWeek4.slots[3]}</td>
  <td >{allWeek5.slots[3]}</td>
    
  
  </tr>
}
 {allData && allData.slots && allData.slots[4] && 
  <tr>
  
  <td >{allWeek3.slots[4]}</td>
  <td >{allWeek4.slots[4]}</td>
  <td >{allWeek5.slots[4]}</td>
  </tr>
}
 {allWeek && allWeek.slots && allWeek.slots[5] && 
  <tr>
   
  <td >{allWeek3.slots[5]}</td>
  <td >{allWeek4.slots[5]}</td>
  <td >{allWeek5.slots[5]}</td>
  </tr>
}
 {allWeek && allWeek.slots && allWeek.slots[6] && 
  <tr>
   
  <td >{allWeek3.slots[6]}</td>
  <td >{allWeek4.slots[6]}</td>
  <td >{allWeek5.slots[6]}</td>
    
  </tr>
}
 {allWeek && allWeek.slots && allWeek.slots[7] && 
  <tr>

  <td >{allWeek3.slots[7]}</td>
  <td >{allWeek4.slots[7]}</td>
  <td >{allWeek5.slots[7]}</td>

  </tr>
}
 </tbody>
</table>
}



{allDate && allDate.slotType === "date" &&
 <table>
 <thead>
 {allDate  && (allDate.appointmentDate || allDate1.appointmentDate ) && 
  <tr>     
 
 
  <th >{allDate.appointmentDate}</th>
  {allDate1  && allDate1.appointmentDate &&
    <th >{allDate1.appointmentDate}</th>
  }
  {allDate2  && allDate2.appointmentDate &&
    <th >{allDate2.appointmentDate}</th>
  }
  {allDate3  && allDate3.appointmentDate &&
    <th >{allDate3.appointmentDate}</th>
  }
  </tr>
 }
 </thead>
 <tbody>

 {allDate && allDate.slots && allDate.slots[0] && 
  <tr>
  
  <td >{allDate.slots[0]}</td>
  <td >{allDate1.slots[0]}</td>
  {allDate2  && allDate2.slots[0] &&
    <td >{allDate2.slots[0]}</td>
  }
  {allDate3  && allDate3.slots[0] &&
    <td >{allDate3.slots[0]}</td>
  }
    
   
  </tr>
}
 {allDate && allDate.slots && allDate.slots[1] && 
  <tr>
  
  <td >{allDate.slots[1]}</td>
  <td >{allDate1.slots[1]}</td>
  {allDate2  && allDate2.slots[1] &&
    <td >{allDate2.slots[1]}</td>
  }
  {allDate3  && allDate3.slots[1] &&
    <td >{allDate3.slots[1]}</td>
  }
    
   
  </tr>
}
 {allDate && allDate.slots && allDate.slots[2] && 
  <tr>
  
  <td >{allDate.slots[2]}</td>
  <td >{allDate1.slots[2]}</td>
  {allDate2  && allDate2.slots[2] &&
    <td >{allDate2.slots[2]}</td>
  }
  {allDate3  && allDate3.slots[2] &&
    <td >{allDate3.slots[2]}</td>
  }
    
   
  </tr>
}
 {allDate && allDate.slots && allDate.slots[3] && 
  <tr>
  
  <td >{allDate.slots[3]}</td>
  <td >{allDate1.slots[3]}</td>
  {allDate2  && allDate2.slots[3] &&
    <td >{allDate2.slots[3]}</td>
  }
  {allDate3  && allDate3.slots[3] &&
    <td >{allDate3.slots[3]}</td>
  }
    
   
  </tr>
}
 {allDate && allDate.slots && allDate.slots[4] && 
  <tr>
  
  <td >{allDate.slots[4]}</td>
  <td >{allDate1.slots[4]}</td>
  {allDate2  && allDate2.slots[4] &&
    <td >{allDate2.slots[4]}</td>
  }
  {allDate3  && allDate3.slots[4] &&
    <td >{allDate3.slots[4]}</td>
  }
    
   
  </tr>
}
 {allDate && allDate.slots && allDate.slots[5] && 
  <tr>
  
  <td >{allDate.slots[5]}</td>
  <td >{allDate1.slots[5]}</td>
  {allDate2  && allDate2.slots[5] &&
    <td >{allDate2.slots[5]}</td>
  }
  {allDate3  && allDate3.slots[5] &&
    <td >{allDate3.slots[5]}</td>
  }
    
   
  </tr>
}
 {allDate && allDate.slots && allDate.slots[6] && 
  <tr>
  
  <td >{allDate.slots[6]}</td>
  <td >{allDate1.slots[6]}</td>
  {allDate2  && allDate2.slots[6] &&
    <td >{allDate2.slots[6]}</td>
  }
  {allDate3  && allDate3.slots[6] &&
    <td >{allDate3.slots[6]}</td>
  }
    
   
  </tr>
}
 {allDate && allDate.slots && allDate.slots[7] && 
  <tr>
  
  <td >{allDate.slots[7]}</td>
  <td >{allDate1.slots[7]}</td>
  {allDate2  && allDate2.slots[7] &&
    <td >{allDate2.slots[7]}</td>
  }
  {allDate3  && allDate3.slots[7] &&
    <td >{allDate3.slots[7]}</td>
  }
    
   
  </tr>
}
 {allDate && allDate.slots && allDate.slots[8] && 
  <tr>
   
  <td >{allDate.slots[8]}</td>
  <td >{allDate1.slots[8]}</td>
  {allDate2  && allDate2.slots[8] &&
    <td >{allDate2.slots[8]}</td>
  }
  {allDate3  && allDate3.slots[8] &&
    <td >{allDate3.slots[8]}</td>
  }
    
   
  </tr>
}
 
 </tbody>

</table> 
}

</div>
      
        <button onClick={onLinkClick} >Back to about page</button>
    </div>
  );
};

export default Appointment; 
