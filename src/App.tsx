import { Route, Routes } from "react-router-dom";

import { Content } from "./pages/Content";
import { Details } from "./pages/Details";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path={`/:id`} element={<Details />} />
    </Routes>
  );
};
