import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Popup from "./components/popup/Popup";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signin from "./components/signInUp/SignIn";
import Signup from "./components/signInUp/SignUp";
const App = () => {
  return (
    <>
      <Router>
      <Header />
      
      <Routes>
        
        <Route path="./signin" element={<Signin />} />
      </Routes>
      </Router>

      <Main />
      {/* <Signup /> */}
    </>
  );
};

export default App;
