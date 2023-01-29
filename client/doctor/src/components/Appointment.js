import React, { useEffect, useState } from "react";
import "./Appointment.css"
import { useParams } from "react-router-dom";

const Appointment = () => {

  const doctorId = useParams().doctorId
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
      // console.log(data.alldateAppointment);
      // console.log(data.allappointment);
      // console.log(data.alldateAppointment);

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
    }
  };

  useEffect(() => {
    callAboutPage();
  }, [doctorId]);

  return (
    <div className='appointment-container'>
      <div >
        <h1 className='appointment-form'>{userData.fullName}</h1>
        <table>
          <tr class="heading">
            <th>Days</th>
            <th>Slots</th>

          </tr>
          <tr>
            <td class="slot-name">
              SUN
            </td>
            <td style={{ wordSpacing: "1rem" }}  >{allData.slots}</td>

          </tr>
          <tr>
            <td class="slot-name">

              MON
            </td>
            <td>{allData.slots}</td>

          </tr>
          <tr>
            <td class="slot-name">
              TUE
            </td>
            <td>{allData.slots}</td>

          </tr>
          <tr>
            <td class="slot-name">

              WED
            </td>
            <td>{allData.slots}</td>

          </tr>
          <tr>
            <td class="slot-name">

              THU
            </td>
            <td>{allData.slots}</td>

          </tr>
          <tr>
            <td class="slot-name">

              FRI
            </td>
            <td>{allData.slots}</td>

          </tr>
          <tr>
            <td class="slot-name">

              SAT
            </td>
            <td>{allData.slots}</td>

          </tr>
        </table>

      </div>
    </div>
  );
};

export default Appointment;














