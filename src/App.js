import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='root'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={ <Signup/> }/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;