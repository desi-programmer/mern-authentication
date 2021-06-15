import { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { UserContext } from "../context/User"

export default function PrivateRoute({ component: Component, ...rest }) {
  const {user, setuser} = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props => {
        return user ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}