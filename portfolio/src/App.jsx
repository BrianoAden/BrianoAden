import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Blog } from "./pages/Blog";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { SnakeASIC } from "./pages/SnakeASIC";
import { DesignCompetition } from "./pages/DesignCompetition";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" index element={<Home />}/>
        <Route path="/Blog" element = {<Blog/>} />
        <Route path="/Resume" element = {<Resume/>} />
        <Route path="/SnakeASIC" element = {<SnakeASIC />} />
        <Route path="/DesignCompetition" element = {<DesignCompetition />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
