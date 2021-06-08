import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup"; 

export default function Register() {
    // validating the form Fields
    const validationSchema = yup.object({
      email: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
      password: yup
        .string("Enter your password")
        .min(6, "Password should be of minimum 6 characters length")
        .required("Password is required"),
        password2 : yup.string("Enter your password").oneOf([yup.ref('password'), null], 'Passwords must match'),
    });
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
        password2 : "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-11 col-md-6 col-lg-5 py-3">
          <h2 className="text-center fw-bold">Create an Account 🙌</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className={
                  "form-control form-control-lg" +
                  (formik.errors.email && formik.touched.email
                    ? " is-invalid"
                    : "")
                }
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                aria-describedby="emailHelp"
              ></input>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
              <div className="invalid-feedback">
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className={
                  "form-control form-control-lg" +
                  (formik.errors.password && formik.touched.password
                    ? " is-invalid"
                    : "")
                }
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              ></input>
              <div className="invalid-feedback">
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password2" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className={
                  "form-control form-control-lg" +
                  (formik.errors.password2 && formik.touched.password2
                    ? " is-invalid"
                    : "")
                }
                id="password2"
                name="password2"
                onChange={formik.handleChange}
                value={formik.values.password2}
              ></input>
              <div className="invalid-feedback">
                {formik.touched.password2 && formik.errors.password2 ? (
                  <div>{formik.errors.password2}</div>
                ) : null}
              </div>
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
