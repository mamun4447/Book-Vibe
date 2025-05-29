import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
