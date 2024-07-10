import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Landingpage from './components/Landingpage';
import Chat from './components/Chat';
import { useUser } from './Contextapi/UserContext';

function App() {
  const {user , setUser} = useUser();
  console.log(user);
  return (
    <div className="App bg-black h-fit">
      <Router>
        <Routes>
          <Route exact path="/signin" element={<Signin></Signin>} />
          <Route exact path="/signup" element={<Signup></Signup>} />
          <Route exact path="/" element={<Landingpage></Landingpage>} />
          <Route exact path="/chat" element={<Chat></Chat>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
