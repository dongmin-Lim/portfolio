import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import Profile from "./Profile/Profile";
import styles from "./App.module.css";
import Tech from "./Tech/Tech";
import Talk from "./Talk/Talk";

function App() {
  return (
    <div className={styles.main}>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/talk" element={<Talk />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
