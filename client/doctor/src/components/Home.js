import React , {useState , useEffect} from 'react'
import bhuvi from "../images/doctor.png";
const Home = () => {

  const [userName, setUserName] = useState({});

  const userHomePage = async () => {
    try {
      const res = await fetch("/getDoctore", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

   
  return (
    <div className="text-center mt-4">
        <p className='pt-5'>WELCOME</p>
        <h1>{userName.fullName}</h1>
        <h2>Doctor Management System</h2>
        <img src={bhuvi} alt="coder" style={{height:"400px"}} />
    </div>
  )
}

export default Home




