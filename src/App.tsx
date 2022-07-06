import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Coding from './pages/Coding/Coding';
import Home from './pages/Home/Home';


export default function App() {
  return (
    <Router>     
      <Routes>
        <Route path="/coding" element={<Coding/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}