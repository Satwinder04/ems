import React,{ useEffect , useState} from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  
   
  // },)

  const [user, setuser] = useState()
  const handleLogin =(email,password)=>{
    // console.log(email,password)

    if(email == 'admin@gmail.com'&& password == '123'){
      // console.log("this is admin")

      setuser('user')
      console.log(user)
    }
    else if(email == 'user@gmail.com'&& password == '123'){
      // console.log("this is user")
      setuser('employee')
      console.log(user)
    }
    else{
      alert("Invaild Credentials")
    }
  }

  // handleLogin('admin@example.com',123)
  return (
    <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin'? <AdminDashboard/> : <EmployeeDashboard/>}
      
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
      
    </>
  );
};

export default App;
