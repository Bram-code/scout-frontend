import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Programs";
import NoPage from "./pages/NoPage";
import LearnToBuild from "./pages/LearnToBuild";
import Activities from "./pages/Activities";
import Programs from "./pages/Programs";
import Choose from "./pages/Choose";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="learnToBuild" element={<LearnToBuild />} />
          <Route path="programs" element={<Programs />} />
          <Route path="activities" element={<Activities />} />
          <Route path="choose" element={<Choose />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
