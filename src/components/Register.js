import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-11 col-md-6 col-lg-5 py-3">
          <h2 className="text-center fw-bold">Create an Account</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control form-control-lg"
                id="email"
                aria-describedby="emailHelp"
              ></input>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="password2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password2"
              ></input>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary py-3 fw-bold fs-4">
                Create Account
              </button>
              <button type="submit" className="btn googleBtn py-3 fw-bold fs-4">
                Continue With Google{" "}
                <img
                  src="https://pics.freeicons.io/uploads/icons/png/2659939281579738432-512.png"
                  width="36px"
                  alt ="Google Logo"
                ></img>{""}
              </button>
            </div>
          </form>
          <div>
            <Link to="/forgot-password" className="text-decoration-none my-3">
              Forgot Password ?
            </Link>
            <br></br>
            Already Registered ? <span></span>{" "}
            <Link to="/login" className="text-decoration-none py-3">
              Login Here ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
