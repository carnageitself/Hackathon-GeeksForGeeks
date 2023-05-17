import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import Store from "./pages/store/Store";
import Contact from "./pages/contact/Contact";
import StoreData from "./pages/storedata/StoreData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/storedata" element={<StoreData />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
