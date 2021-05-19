import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./components/LandingPage/LandingPage";
import ImageContainer from "./components/ImageContainer/ImageContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <ImageContainer />
    </div>
  );
}

export default App;
