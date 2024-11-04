import { Route, Routes } from "react-router-dom";
import Layout from "src/components/Layout";
import { TEMP_URL } from "src/constants/URL";
import ErrorPage from "src/pages/error";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path={TEMP_URL.home} element={<Layout />}>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
