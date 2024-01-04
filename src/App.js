
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx"
import { Outlet } from "react-router";




function App() {

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
  
    </>
  );
}

export default App;
