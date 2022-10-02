// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
// import { Footer } from "./components/Footer";
// import SearchEngine from "./components/SearchEngine.js";
import Faq from "./components/Faq";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Projects />
			<Faq />
			{/* <SearchEngine /> */}
			{/* <Footer /> */}
		</div>
	);
}

export default App;
