import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <Nav />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/talk" element={<Talk />} />
          </Routes>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
