import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import app from './firebase/firebase-config';

function Login() {
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [alert, setAlert] = useState(null);
    const auth = getAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (auth.currentUser) {
            navigate("/")
        }
    },[auth.currentUser,navigate])

    const login = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(app);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setAlert("login failed due to some reason");
                setTimeout(() => {
                    setAlert(null);
                },7000)
            });
    }

    return (
        <form className="form" onSubmit={login}>
            {alert && <div className="alert">{ alert }</div>}
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
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;