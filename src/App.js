import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import Profile from "./Profile/Profile";
import Tech from "./Tech/Tech";
import Portfolio from "./Portfolio/Portfolio";
import Talk from "./Talk/Talk";
import Home from "./Home/Home";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/talk" element={<Talk />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
