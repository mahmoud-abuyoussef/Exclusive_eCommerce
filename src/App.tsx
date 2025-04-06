import PageLayout from "./components/layouts/PageLayout";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/about" element={<div>About</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
