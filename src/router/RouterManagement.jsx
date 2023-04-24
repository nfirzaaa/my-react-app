import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LayoutComponent from "../components/layout/LayoutComponent";
import CreateProduct from '../Pages/createProduct/CreateProduct';
// import LandingPage from "../Pages/landingPage/LandingPage";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <Suspense fallback={< CreateProduct />}>
      {!token ? (
        <Routes>
          <Route path="/" element={<CreateProduct />} />
        </Routes>
      ) : (
        <LayoutComponent>
          <Routes>
            {/* <Route path="/landing-page" element={<LandingPage />} /> */}
            <Route path="/createProduct" element={<CreateProduct />} />
          </Routes>
        </LayoutComponent>
      )}
    </Suspense>
  );
};

export default RouteManagement;