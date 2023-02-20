import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signInUp/SignIn";
import SignUp from "./components/signInUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      <Router>
        <Header />

        <Routes>
<<<<<<< HEAD
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Main/>} />
        </Routes>
        
      </Router>

      
      {/* <div className="cardContainer"> <div style={{backgroundColor:"#ffffff"}} className="card"></div> </div> */}

      
=======
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<SignUp />} />
        </Routes>
        {user && <Main />}
        <ToastContainer />

      </Router>

      {/* <Signup /> */}
>>>>>>> d06720d5973a2e6fe3f8a743231ee331fea5e8e6
    </>
  );
};

export default App;
