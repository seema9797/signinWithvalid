import React, { useState,useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import Login from '../Login/Login';

const getDatafromLS=()=>{
    const data=localStorage.getItem('Users');
    if(data){
        return JSON.parse(data)
    }
    else {
        return []
    }
}
function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Dob, setDob] = useState("");
    const[UserDatas,setUserData]=useState(getDatafromLS());
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);





    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();
          let User={
              name,
              email,
              password,
              Dob
          }
          setUserData([...UserDatas,User])
        if (!name || !email || !password || !Dob) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("SubmissionName",JSON.stringify(name))
            localStorage.setItem("SubmissionEmail", JSON.stringify(email));
            localStorage.setItem("SubmissionPassword", JSON.stringify(password));
            localStorage.setItem("SubmissionDob",JSON.stringify(Dob))
            console.log("Saved in Local Storage");

            setLogin(!login)

        }
          
    }
    useEffect(()=>{
        localStorage.setItem('Users',JSON.stringify(UserDatas))
    },[UserDatas])
    
    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }



    return (
        <>
             <div className="inner1"> {login ? <form onSubmit={handleFormSubmit}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Date Of Birth</label>
                    <input type="date" className="form-control" onChange={(event) => setDob(event.target.value)} />
                </div>

           


                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick}>log in?</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        I got it you are in hurry! But every Field is important!
                </Alert>
                }

            </form> : <Login />}
            </div> 
        </>
    )
}

export default Registration
