import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Landingpage from './components/Landingpage';
import Chat from './components/Chat';
import { useUser } from './Contextapi/UserContext';

function App() {
  const {user , setUser} = useUser();
  
  console.log(user);
  const ProtectedRoute = ({ children }) => {
    if (user === null) {
      console.log('navigation to login page');
      return (<Navigate to="/signin"></Navigate>)
    }
    return children
  }
  return (
    <div className="App bg-black h-fit">
      <Router>
        <Routes>
          <Route exact path="/signin" element={ <Signin></Signin>} />
          <Route exact path="/signup" element={<Signup></Signup>} />
          <Route exact path="/" element={<ProtectedRoute><Landingpage></Landingpage> </ProtectedRoute>} />
          <Route exact path="/chat" element={<Chat></Chat>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
