import { BrowserRouter as Router, 
Routes,
 Route
} from "react-router-dom"

import Profile from "./Routes/Profile";
import Billing from "./Routes/Billing"
import Confirm from "./Routes/Confirm";
import Pcomplete from "./Routes/Pcomplete";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile/>} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/confirm" element={<Confirm/>} />
        <Route path="/Pcomplete" element={<Pcomplete/>} />
      </Routes>
    </Router>
  );
}

export default App;
