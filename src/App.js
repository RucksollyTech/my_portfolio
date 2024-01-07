import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ScrollToTop from "./ScrollToTop";
import Home from "./SkyHouse/Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./SkyHouse/Contact";

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Routes>
					<Route path="/" element ={<Home/>} />
					<Route path="/home" element ={<Home/>} />
					<Route path="/about" element ={<About/>} />
					<Route path="/projects" element ={<Projects/>} />
					<Route path="/contact" element ={<Contact/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
