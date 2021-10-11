import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6 py-5">
          <h1 className="text-center">Register Here</h1>
          <form>
            <div class="row mb-3">
              <label for="inputText3" class="col-sm-2 col-form-label">
                Name
              </label>
              <div class="col-sm-10">
                <input type="text" class="form-control" id="inputText3" />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3" />
              </div>
            </div>
            <div class="row mb-3">
              <label for="inputPassword3" class="col-sm-2 col-form-label">
                Password
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-sm-10 offset-sm-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label class="form-check-label" for="gridCheck1">
                    Example checkbox
                  </label>
                </div>
              </div>
            </div>
            <p>
              <Link to="/login">Already Registered?</Link>
            </p>

            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
