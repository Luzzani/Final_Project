import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FormUser from "../components/Register/FormUser";
import Dashboard from "../pages/Dashboard";
import Shop from "../pages/Shop/Shop";
import ProtectedRoute from "./ProtectedRoutes";
import ProductDetail from "../pages/Shop/ProductDetail";

function MainRoutes() {
  const { userInfoFirestore } = useSelector((state) => state.authReducer);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="check-in" element={<Register />} />
      <Route path="form-user" element={<FormUser />} />
      <Route path="/products" element={<Shop />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route
        path="dashboard-player"
        element={
          <ProtectedRoute isAllowed={!!userInfoFirestore}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="dashboard-admin"
        element={
          <ProtectedRoute
            isAllowed={!!userInfoFirestore && userInfoFirestore.isAdmin}
          >
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default MainRoutes;
