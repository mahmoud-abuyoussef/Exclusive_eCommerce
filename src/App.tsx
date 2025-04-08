import Home from "./components/pages/Home";
import PageLayout from "./components/layouts/PageLayout";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/signup" element={<Home />} />
            <Route path="/account" element={<Home />} />
            <Route path="/orders" element={<Home />} />
            <Route path="/collections" element={<Home />} />
            <Route path="/reviews" element={<Home />} />
            <Route path="/cart" element={<Home />} />
            <Route path="/login" element={<Home />} />
            <Route path="/wishlist" element={<Home />} />
            <Route path="/privacy" element={<Home />} />
            <Route path="/faq" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
