import React , {useState , useEffect} from 'react'
import bhuvi from "../images/doctor.png";
const Home = () => {

  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getcontact", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.fullName );
      setShow(true)
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
        <h1>{userName}</h1>
        <h2>{show ? "Happy, to see you back" :"Doctor Management System"}</h2>
        <img src={bhuvi} alt="coder" style={{height:"400px"}} />
    </div>
  )
}

export default Home




