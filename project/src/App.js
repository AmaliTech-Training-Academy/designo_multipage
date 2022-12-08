
import Footer from "./components/Footer/Footer";
import Design from "./components/App_Design/Design";
// import pattern from "./assets/app-design/desktop/bg-pattern-intro-app.svg"
import "./index.css"
import './App.css'
import Header from './components/Header/Header';
import Graphic from "./components/Graphic_Design/Graphic";
import {BrowserRoute} from "react-router-dom"

function App() {
  return (
    <>
    <div className="App"  >
      <Header />
      {/* <Design/> */}
      <Graphic/>
      </div>
      <Footer/>
    </>
  )}
export default App;
