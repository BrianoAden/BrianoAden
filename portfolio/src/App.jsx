import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Blog } from "./pages/Blog";
import { Home } from "./pages/Home";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element = {<Blog/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
