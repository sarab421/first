import Layout from "./Layout";
import {Routes,Route} from "react-router-dom";
import ContactUsPage from "./pages/contactPage";
import HomePage from "./pages/homePage";
import ServicePage from "./pages/servicePage";
function App() {
  return (
 <>
   <Routes>
    <Route path="/" exact Component={HomePage}/>
    <Route path="/service" exact Component={ServicePage}/>
    <Route path="/contact-us" exact Component={ContactUsPage}/>
   </Routes>
 </>
  );
}

export default App;
