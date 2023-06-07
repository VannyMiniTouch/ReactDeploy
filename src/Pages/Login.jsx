import React, { Fragment, useState } from "react";
import "../contents/css/style.css";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Login = ()=>{
    console.log("ok")
  }
  const handleUsername = (e)=>{
    setUsername(e.target.value)
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value);
  }


  return (
    <Fragment>
      <div className="login">
        <div className="container">
          <div className="login-container">
            <div className="login-header">
              <h3>LOGIN</h3>
              <hr />
            </div>
            <div className="login-body">
              <form >
                <div className="form-group">
                  <label htmlFor="username">User Name</label>
                  <input
                    type="text"
                    className="form-control mt-2"
                    name="username"
                    id="username"
                    value={username}
                    onChange={handleUsername}
                  />
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control mt-2"
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePassword}
                  />
                </div>
                <div className="form-group-btn">
                  <button type="button" onClick={Login} className="btn">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
