import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Travel from "./ImageGallery";

import Home from "./Home";
import { ToastContainer } from "react-toastify";

// import TravelPackageDetails from "./Travel";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: 9999 }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Travel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
