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

  const callAppointmentPage = async () => {
    try {
      const res = await fetch(`/getDoctoreById/${doctorId}`, {
        
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
      setAllData(data.allappointment);
      setWeekData(data.allweekappointment);
      setDateData(data.alldateAppointment);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

 console.log(allData.slotType === "all");
  useEffect(() => {
    callAppointmentPage();
  }, [doctorId]);
  
  return (
    <div>
              {(() => {
                if (allData.slotType[0] === "all") {
                  return (
                    <div>     <table>
                    <tr className="heading">
                    <th>Days</th>
                    <th>Slots</th>
                    </tr>
                    <tr>
                      <td className="slot-name">SUN</td>
                      <td>{allData.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">MON</td>
                      <td>{allData.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">TUE</td>
                      <td>{allData.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">WED</td>
                      <td>{allData.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">THU</td>
                      <td>{allData.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">FRI</td>
                      <td>{allData.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">SAT</td>
                      <td>{allData.slots}</td>
                      </tr>
                      </table></div>
                      )
                    } 
                    else if (allWeek.slotType[0] === "week") {
                  return (
                    <div><table>
                    <tr className="heading">
                      <th>Days</th>
                      <th>Slots</th>
                    </tr>
                    <tr>
                      <td className="slot-name">SUN</td>
                      <td>{allWeek.slots}</td>
                    </tr>
                    <tr>
                      <td className="slot-name">MON</td>
                      <td>{allWeek.slots}</td>
                    </tr>
                    <tr>
                      <td className="slot-name">TUE</td>
                      <td>{allWeek.slots}</td>
                    </tr>
                    <tr>
                    <td className="slot-name">WED</td>
                      <td>{allWeek.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">THU</td>
                      <td>{allWeek.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">FRI</td>
                      <td>{allWeek.slots}</td>
                      </tr>
                      </table></div>
                      )
                    } else {
                      return (
                    <div><table> 
                    <tr className="heading">
                      <th>Days</th>
                      <th>Slots</th>
                      </tr>
                      <tr>
                      <td className="slot-name">SUN</td>
                      <td>{allDate.slots}</td>
                      </tr>
                      <tr> 
                      <td className="slot-name">MON</td>
                      <td>{allDate.slots}</td>
                    </tr>
                    <tr>
                      <td className="slot-name">TUE</td>
                      <td>{allDate.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">WED</td>
                      <td>{allDate.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">THU</td>
                      <td>{allDate.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">FRI</td>
                      <td>{allDate.slots}</td>
                      </tr>
                      <tr>
                      <td className="slot-name">SAT</td>
                      <td>{allDate.slots}</td>
                      </tr>
                      </table></div>
                      )
                    }
              })()}
           
            </div>
          )
        
          
          
          
          










//   return (
//     <div className="appointment-container">
//       <div>
//         <h1 className="appointment-form">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;{userData.fullName} &nbsp;&nbsp;&nbsp; <spam style= {{fontSize: "1.5rem"}} >Fees = {userData.consultationFee} ₹</spam></h1>
//         <p className="appoint-form">{userData.specialization}</p>

// <p>{userData}</p>

//       </div>
      
//         <button onClick={onLinkClick} >Back to about page</button>
//     </div>
//   );
};

export default Appointment;
