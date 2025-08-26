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
        <Route path="/blog" element = {<Blog/>} />
        <Route path="/resume" element = {<Resume/>} />
        <Route path="/snakeasic" element = {<SnakeASIC />} />
        <Route path="/addercomp" element = {<DesignCompetition />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
