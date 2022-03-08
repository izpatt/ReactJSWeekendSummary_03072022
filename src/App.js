import "./App.css";
import Navbar from "./components/A_Navbar";
import Homepage from "./components/B_Homepage";
import Weekend from "./components/C_Weekend";
import Ideas from "./components/D_Ideas";
import Footer from "./components/E_Footer";

//links
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="Weekend" element={<Weekend />} />
            <Route path="Ideas" element={<Ideas />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <br />
      <br />
      <Footer />
    </>
  );
}

export default App;
