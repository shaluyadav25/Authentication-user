import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Features/Login/Login";
import Register from "./Features/Register/Register";
import ProtectedRoute from "./Features/ProtectedRoute/Routes";
import Dashboard from "./Features/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;