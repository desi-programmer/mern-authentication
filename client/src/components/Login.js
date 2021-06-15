import { Link, useHistory, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';
import { useState, useContext } from "react";
import Alert from './ErrorAlert';
import { UserContext } from "../context/User";

export default function Login() {
  let history = useHistory();
  const location = useLocation();

  const { user , setuser } = useContext(UserContext);

  const [errors, seterrors] = useState([]);

  async function loginUser(values) {
    seterrors([]);
    console.log(values);
    // request 
    try {
      const response = await axios.post('http://localhost:3001/api/login', values,
          { 
          headers: { 'Content-Type': 'application/json; charset=UTF-8',
         }, 
        }
      );
      console.table(response.data.token);
      localStorage.setItem('token', response.data.token);

        setuser(response.data.token);
        history.push('/');

    } catch (error) {
      var errors = [];
      for (const err of error.response.data.errors ) {
        console.log(err.msg);
        errors.push(err.msg);
      }
      seterrors(errors);
    }
  }

  // useEffect(() => {
  //   if(location.state){
  //     console.log(`Location : ${location.state.msg}`);
  //   }
  // }, []);


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
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginUser(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
  
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-11 col-md-6 col-lg-5 py-3">
          <h2 className="text-center fw-bold pb-2">Welcome Back 🙂</h2>

          {errors.map((err)=>{
            return (<Alert key={err} err={err} show={true}></Alert>);
            })}


            {location.state ? 
              <Alert key={"err"} err={"Log in to continue !"} show={true}></Alert> : null
            }


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
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                name="password"
              ></input>
              <div className="invalid-feedback">
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary py-3 fw-bold fs-4"
              >
                Login
              </button>
              <button className="btn googleBtn py-3 fw-bold fs-4">
                Continue With Google{" "}
                <img
                  src="https://pics.freeicons.io/uploads/icons/png/2659939281579738432-512.png"
                  alt="Google Icon"
                  width="36px"
                ></img>{" "}
              </button>
            </div>
          </form>
          <div>
            <Link to="/forgot-password" className="text-decoration-none my-3">
              Forgot Password ?
            </Link>
            <br></br>
            New Here ? <span></span>{" "}
            <Link to="/register" className="text-decoration-none py-3">
              Create An Account ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
