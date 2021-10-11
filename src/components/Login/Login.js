import React from "react";
// import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const {
    handleNameChange,
    isLogin,
    toggleLogin,
    error,
    // signInWithGoogle,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
  } = useFirebase();

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6 py-5">
          <h1 className="text-center text-primary pb-3">
            {/* {isLogin ? "Login Here" : "Register Here"} */}
            {!isLogin ? "Login Here" : "Register Here"}
          </h1>
          <form onSubmit={handleRegistration}>
            {isLogin && (
              <div className="row mb-3">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    onBlur={handleNameChange}
                    className="form-control"
                    id="inputName"
                    placeholder="Your Name"
                  />
                </div>
              </div>
            )}
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handleEmailChange}
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handlePasswordChange}
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input
                    onChange={toggleLogin}
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    New User?
                  </label>
                </div>
              </div>
            </div>
            <p>{/* <Link to="/register">New User?</Link> */}</p>
            <div className="row mb-3 text-danger">{error}</div>

            <button type="submit" className="btn btn-primary">
              {/* {isLogin ? "Login" : "Register"} */}
              {!isLogin ? "Login" : "Register"}
            </button>
            {/* <button onClick={signInWithGoogle}>Google Sign In</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
