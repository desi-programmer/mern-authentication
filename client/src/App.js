import { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import { UserContext } from "./context/User";
// import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./components/NotFound";

// const localStorageKey = "Local_Storage_Key";

function App() {  
   const [user, setuser] = useState(false);
   const [fetchUser, setfetchUser] = useState(false);

  // Checking user based on token availability 

  useEffect(() => {
    // get use from local storage
    var token = localStorage.getItem('token');
    console.log(`Token : ${token}`);
    // setuser("token");
    if(token){
      // there is user 
      setuser(token);
      
    }else{
      setuser(null);
    }
    setfetchUser(true);
  }, [])

  console.log(`User is ${user}`);
  return ( fetchUser ?
    <UserContext.Provider value={{ user, setuser } }>
      <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
<<<<<<< HEAD
          <div className="text-center">
            <h1 className="text-center py-5">Welcome To Home Page</h1>
            <p>We are about to implement MERN AUTHENTICATION !</p>
=======
          <div className='text-center'>
          <h1 className="text-center py-5">Welcome To Home Page</h1>
          <p>We are about to implement MERN AUTHENTICATION !</p>
          { user ? <p>User</p> : <p>No User</p> }
          {user ? <Link to='/profile'>Go to Profile</Link> : null }
          {/* <PrivateRoute exact path='/profile' component={Profile}></PrivateRoute> */}
>>>>>>> a8d5146d6b30cf1b42e3c9273c2c946593ce56e6
          </div>
        </Route>
      
        <Route exact path="/profile">
        
         { user !== null ? <Profile></Profile> : <Redirect to={{ pathname : '/login' , state : { msg : "err" } }}></Redirect>}
          {/* <Profile></Profile> */}
        </Route>
      
        <Route exact path="/login"> 
         { !user ? <Login></Login> : <Redirect to='/'></Redirect>}
          {/* <Login></Login> */}
        </Route>
      
        <Route exact path="/register">
        { !user ? <Register></Register> : <Redirect to='/'></Redirect>}
          {/* <Register></Register> */}
        </Route>
        <Route> <NotFound></NotFound> </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
      : <p>Loading....</p>
    
    ); 
}

export default App;
