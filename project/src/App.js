
import Footer from "./components/Footer/Footer";
import Design from "./components/App_Design/Design";
// import pattern from "./assets/app-design/desktop/bg-pattern-intro-app.svg"
import "./index.css"
import './App.css'
import Header from './components/Header/Header';
import TopAbout from "./components/About/top";


function App() {
  return (
    <div className="app"  >
      {/* <Header />
      <Design/>
      <Footer/> */}
      <Header/>
      <TopAbout/>
      </div>
  )}
export default App;
