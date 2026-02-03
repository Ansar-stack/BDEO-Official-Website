import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // Add the toast container
    <>
      <ToastContainer
      position="top-right"
      autoClose={2000}
    />
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </>

  );
}

export default App;
