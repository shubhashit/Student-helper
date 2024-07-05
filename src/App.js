import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Landingpage from './components/Landingpage';

function App() {
  return (
    <div className="App bg-black h-fit">
      <Router>
        <Routes>
          <Route exact path="/signin" element={<Signin></Signin>} />
          {/* <Route exact path="/signup" element={<Signup></Signup>} /> */}
          <Route exact path="/" element={<Landingpage></Landingpage>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
