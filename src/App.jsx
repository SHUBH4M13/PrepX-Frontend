import { BrowserRouter as Router, Routes, Route } from "react-router"; 

import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import NDA from "./Components/Subjects/NDA";
import CDS from "./Components/Subjects/CDS";
import TestMCQ from "./Components/Pages/TestMCQ";
import ScrollToTop from "./Components/Scroll/Scrollup";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Result from "./Components/Pages/Result";
import Forgotpassword from "./Components/Pages/Forgotpassword";
import ReviewAnswers from "./Components/Pages/ReviewAnswers";
import AFCAT from "./Components/Subjects/AFCAT";

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/NDA" element={ <ProtectedRoute> <NDA /> </ProtectedRoute>} />
        <Route path="/CDS" element={ <ProtectedRoute> <CDS /> </ProtectedRoute>} />
        <Route path="/AFCAT" element={ <ProtectedRoute> <AFCAT /> </ProtectedRoute>} />
        <Route path= "/:examCode" element={<ProtectedRoute> <TestMCQ /> </ProtectedRoute>} />
        <Route path= "/review" element={<ProtectedRoute> <ReviewAnswers /> </ProtectedRoute>} />
        <Route path= "/result" element={<ProtectedRoute> <Result /> </ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
