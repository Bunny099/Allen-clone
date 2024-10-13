import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Allen from "./Allen";
import Home from "./Pages/Home";
import Exams from "./Pages/Exams";
import "./App.css";
import Program from "./Pages/Program";
import Scholarship from "./Pages/Scholarship";
import TestSeries from "./Pages/TestSeries";
import StudyMaterial from "./Pages/StudyMaterial";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Allen />}>
            <Route path="/" element={<Home />} />
            <Route path="/exams" element={<Exams />} />
            <Route path="/programs" element={<Program />} />
            <Route path="/scholarships" element={<Scholarship />} />
            <Route path="/testseries" element={<TestSeries />} />
            <Route path="/studymaterial" element={<StudyMaterial />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
