import "./index.css"
import './App.css'
import Header from './components/Header/Header';
import {BrowserRouter} from "react-router-dom"
import AppRoutes from "./routes";

function App() {
  return (
    <div className="App"  >
      <BrowserRouter>
      <Header/>
      <AppRoutes/>
      </BrowserRouter>
      </div>
  )}
export default App;
