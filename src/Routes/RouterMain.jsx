import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";


export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
};
