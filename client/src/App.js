import Search from "./components/Search"
import Saved from "./components/Saved"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return (
    <>
    
    <Router>
      <Navbar />
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Saved} />
    </Router>
    </>
  );
}

export default App;
