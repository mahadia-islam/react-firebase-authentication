import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from './firebase/firebase-config';
import { useNavigate } from "react-router-dom";

function Signup(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmaPassword] = useState("");
    const [alert, setAlert] = useState(false);

    const navigate = useNavigate();

    const signup = (event) => {
        event.preventDefault();
        const auth = getAuth();
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(res => {
                    console.log(app);
                    navigate("/");
                    setAlert("Signup successfull");
                    setTimeout(() => {
                        setAlert(null);
                    }, 7000);
                })
                .catch(err => {
                    setAlert("Signup failed");
                    setTimeout(() => {
                        setAlert(null);
                    }, 7000);
                });
        } else {
            setAlert("password didn't macthed");
            setTimeout(() => {
                setAlert(null);
            },7000)
        }
    }

    return (
        <form className="form" onSubmit={signup}>
            {alert && <div className="alert">{alert}</div>}
            <input
                type="email"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmaPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Signup;