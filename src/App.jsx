import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import {Navbar} from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import ContextProvider from "./Components/utils/global.context";

function App() {
  return (

    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/dentist/:id" element={<Detail />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="*" element={<h1>Página no encontrada</h1>}/>
            </Route>
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>

  );
}

export default App;
