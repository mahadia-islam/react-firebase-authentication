import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import app from './firebase/firebase-config';

function Welcome() {

    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(app);
        console.log(auth.currentUser);
        if (!auth.currentUser) {
            navigate("/login")
        }
    }, [auth.currentUser, navigate]);

    const logout = () => {
        auth.signOut();
        navigate("/login");
    }

    return (
        <div className="welcome">
            <h1>You successfully logined</h1>
            <img src="./img/welcome.svg" alt="" />
            <button onClick={logout} className="logout">logout</button>
        </div>
    )
}

export default Welcome;