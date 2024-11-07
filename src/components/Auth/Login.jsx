import React, { useState } from "react";

const Login = ({handleLogin}) => {
  
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is ",email);
    console.log("passs is ",password);
    handleLogin(email,password)
    setemail("")
    setpassword("")
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className=" border-2 border-red-500 ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              // console.log(e.target.value)
              setemail(e.target.value);
            }}
            required
            type="text"
            placeholder="enter email"
          />
          <input
          value={password}
          onChange={(e) => {
              // console.log(e.target.value)
              setpassword(e.target.value);
          }}
          required type="password" placeholder="enter password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
