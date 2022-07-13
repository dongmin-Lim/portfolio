import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import Profile from "./Profile/Profile";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.main}>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
