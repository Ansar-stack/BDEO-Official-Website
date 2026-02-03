import { Outlet } from "react-router-dom";
import Header from "../components/Navbar/Header";
import Footer from "../components/UI/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
