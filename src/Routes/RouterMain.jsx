import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { WorksPage } from "../pages/WorksPage";
import { ErrorPage } from "../pages/ErrorPage";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/works" element={<WorksPage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
};
