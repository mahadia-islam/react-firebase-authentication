import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="header">
            <div className="navbar">
                <ul>
                    <li><Link className="active" to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;