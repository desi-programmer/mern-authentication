import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/User';

export default function Profile() {
    let history = useHistory();
    const [userdata, setuserdata] = useState(new Map());
    const { user, setuser } = useContext(UserContext)

    async function getUserData(){
        // get the token
        var token = localStorage.getItem('token');
        if(token){
            console.log(`Fetched Token : ${token}`);
            try {
                const response = await axios.get('http://localhost:3001/api/profile',
                { 
                   headers: {
                       'x-auth-token': token.toString(), 
                    },
                }
                );
                // console.table(response.data);
                setuserdata(response.data);
                console.log(userdata);
              } catch (error) {
                console.log(error.response);
                if(error.response.status === 401){
                    console.log("Not aAuthenticated !");
                    setuser(null);
                    localStorage.clear();
                    history.push('/login');
                }
                // console.error(error);
              }
        }else{
            // send to login page
            history.push('/login');
        }
    }

    useEffect(() => {
        getUserData();
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
            <div className="col-11 col-md-4">
            <div className="p-3 py-5 shadow text-center">
                <img className="img-fluid" alt="User Avatar" src="https://assets.codepen.io/616322/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1&width=512" />
            <h1>User Profile !</h1>
            <h3>Name : {userdata.name}</h3>
            <h3>Email : {userdata.email}</h3>
            </div>
            </div>
            </div> 
        </div> 
    )
}
